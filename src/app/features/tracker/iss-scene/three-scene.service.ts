import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { IssPosition } from '../../../core/models/iss-position.model';

const EARTH_RADIUS_SCENE = 90;
const EARTH_RADIUS_KM = 6_371;

@Injectable()
export class ThreeSceneService {
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1_000);
  private readonly renderer = new THREE.WebGLRenderer({ antialias: true });
  private readonly targetPosition = new THREE.Vector3();
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointer = new THREE.Vector2();
  private readonly pointerDown = new THREE.Vector2();
  private readonly trajectoryMaterial = new THREE.LineDashedMaterial({
    color: 0xffff00,
    dashSize: 3,
    gapSize: 10,
    scale: 10
  });

  private controls?: OrbitControls;
  private iss?: THREE.Object3D;
  private hitSphere?: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
  private trajectoryLine?: THREE.Line;
  private resizeObserver?: ResizeObserver;
  private initialized = false;
  private followingIss = false;

  async initialize(host: HTMLElement): Promise<void> {
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(this.renderer.domElement);

    this.camera.position.set(0, 0, 250);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = -0.01;
    this.controls.enablePan = false;
    this.controls.minDistance = 105;
    this.controls.addEventListener('start', this.stopFollowing);
    this.renderer.domElement.addEventListener('pointerdown', this.recordPointerDown);
    this.renderer.domElement.addEventListener('pointerup', this.selectIss);

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    this.scene.add(new THREE.DirectionalLight('#fcffbe', 1));
    const fillLight = new THREE.DirectionalLight('#bee2ff', 1);
    fillLight.position.set(0, 120, -180);
    this.scene.add(fillLight);

    await this.addEarth();
    await this.addIssModel();

    this.resizeObserver = new ResizeObserver(() => this.resize(host));
    this.resizeObserver.observe(host);
    this.resize(host);
    this.initialized = true;
    this.renderer.setAnimationLoop(() => this.render());
  }

  update(position: IssPosition | null, trajectory: readonly IssPosition[]): void {
    if (!this.initialized) {
      return;
    }

    if (position) {
      this.targetPosition.copy(this.toCartesian(position));
    }

    this.replaceTrajectory(trajectory);
  }

  destroy(): void {
    this.resizeObserver?.disconnect();
    this.renderer.setAnimationLoop(null);
    this.controls?.dispose();
    this.controls?.removeEventListener('start', this.stopFollowing);
    this.renderer.domElement.removeEventListener('pointerdown', this.recordPointerDown);
    this.renderer.domElement.removeEventListener('pointerup', this.selectIss);
    this.trajectoryMaterial.dispose();
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => material.dispose());
      }
    });
    this.renderer.dispose();
  }

  private async addEarth(): Promise<void> {
    const [vertexShader, fragmentShader, atmosphereVertexShader, atmosphereFragmentShader] =
      await Promise.all([
        this.loadTextAsset('shaders/vertex.glsl'),
        this.loadTextAsset('shaders/fragment.glsl'),
        this.loadTextAsset('shaders/atmosVertex.glsl'),
        this.loadTextAsset('shaders/atmosFragment.glsl')
      ]);

    const cubeTextureLoader = new THREE.CubeTextureLoader().setPath(
      this.assetUrl('textures/environmentMaps/')
    );
    const environmentMap = cubeTextureLoader.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
    this.scene.background = environmentMap;
    this.scene.environment = environmentMap;

    const earthTexture = new THREE.TextureLoader().load(this.assetUrl('images/earth_atmos_2048.jpg'));
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(EARTH_RADIUS_SCENE, 32, 32),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: { uEarthTexture: { value: earthTexture } }
      })
    );
    earth.rotation.y = Math.PI;
    this.scene.add(earth);

    this.scene.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(95, 32, 32),
        new THREE.ShaderMaterial({
          vertexShader: atmosphereVertexShader,
          fragmentShader: atmosphereFragmentShader,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide
        })
      )
    );
  }

  private async addIssModel(): Promise<void> {
    const gltf = await new GLTFLoader().loadAsync(this.assetUrl('models/iss-station.gltf'));
    this.iss = gltf.scene;
    this.iss.scale.setScalar(2);
    this.scene.add(this.iss);

    this.hitSphere = new THREE.Mesh(
      new THREE.SphereGeometry(7, 16, 16),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
    );
    this.scene.add(this.hitSphere);
  }

  private replaceTrajectory(samples: readonly IssPosition[]): void {
    this.trajectoryLine?.removeFromParent();
    this.trajectoryLine?.geometry.dispose();

    if (samples.length < 2) {
      this.trajectoryLine = undefined;
      return;
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(samples.map((sample) => this.toCartesian(sample)));
    this.trajectoryLine = new THREE.Line(geometry, this.trajectoryMaterial);
    this.trajectoryLine.computeLineDistances();
    this.scene.add(this.trajectoryLine);
  }

  private toCartesian(position: IssPosition): THREE.Vector3 {
    const latitude = THREE.MathUtils.degToRad(position.latitude);
    const longitude = THREE.MathUtils.degToRad(position.longitude);
    const radius = EARTH_RADIUS_SCENE * (1 + position.altitudeKm / EARTH_RADIUS_KM);

    return new THREE.Vector3(
      -radius * Math.cos(latitude) * Math.cos(longitude),
      radius * Math.sin(latitude),
      radius * Math.cos(latitude) * Math.sin(longitude)
    );
  }

  private render(): void {
    if (this.iss) {
      this.iss.position.lerp(this.targetPosition, 0.035);
      this.iss.lookAt(0, 0, 0);
      this.hitSphere?.position.copy(this.iss.position);
      this.updateCameraFollow();
    }
    this.controls?.update();
    this.renderer.render(this.scene, this.camera);
  }

  private resize(host: HTMLElement): void {
    const { width, height } = host.getBoundingClientRect();
    if (width === 0 || height === 0) {
      return;
    }
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }

  private async loadTextAsset(path: string): Promise<string> {
    const response = await fetch(this.assetUrl(path));
    if (!response.ok) {
      throw new Error(`Unable to load scene asset: ${path}.`);
    }
    return response.text();
  }

  private assetUrl(path: string): string {
    return new URL(path, document.baseURI).toString();
  }

  private readonly recordPointerDown = (event: PointerEvent): void => {
    this.pointerDown.set(event.clientX, event.clientY);
  };

  private readonly selectIss = (event: PointerEvent): void => {
    if (!this.hitSphere || event.button !== 0 || this.pointerDown.distanceTo(new THREE.Vector2(event.clientX, event.clientY)) > 5) {
      return;
    }

    const bounds = this.renderer.domElement.getBoundingClientRect();
    this.pointer.set(
      ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
      -((event.clientY - bounds.top) / bounds.height) * 2 + 1
    );
    this.raycaster.setFromCamera(this.pointer, this.camera);

    if (this.raycaster.intersectObject(this.hitSphere).length > 0) {
      this.followingIss = true;
    }
  };

  private readonly stopFollowing = (): void => {
    this.followingIss = false;
  };

  private updateCameraFollow(): void {
    if (!this.followingIss || !this.iss || !this.controls) {
      return;
    }

    const outward = this.iss.position.clone().normalize();
    const desiredCameraPosition = this.iss.position.clone().addScaledVector(outward, 60);
    this.camera.position.lerp(desiredCameraPosition, 0.05);
    this.controls.target.lerp(this.iss.position, 0.1);
  }
}
