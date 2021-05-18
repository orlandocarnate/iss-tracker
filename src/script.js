import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import axios from "axios";
import gsap from "gsap";
import { issLocation, convertToRadians } from "./issdata.js";

// Debug
const gui = new dat.GUI();
const debugObject = {};
let issVec3 = new THREE.Vector3();

const points = [];
let prevPoint = new THREE.Vector3();
let newPoint = new THREE.Vector3();

console.log("ISS Tracker External Function", issLocation());

/**
 * SCENE
 */
const scene = new THREE.Scene();

let tl = gsap.timeline();

/** Update Screensize
 *
 */
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/** \
 * Camera
 */
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = -0.01;
controls.enablePan = false;
controls.minDistance = 105;

camera.position.z = 250;

/**
 * LIGHTS
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

gui.add(ambientLight, "intensity").min(0).max(3).step(0.001);

const directionalLight = new THREE.DirectionalLight("#ffffff", 1);
directionalLight.castShadow = true;
directionalLight.shadow.camera.far = 15;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.normalBias = 0.05;
directionalLight.position.set(-180, 290, 200);

const directionalLight2 = new THREE.DirectionalLight("#AAAAff", 0.4);
directionalLight2.position.set(180, -290, -200);
scene.add(directionalLight, directionalLight2);

gui
  .add(directionalLight, "intensity")
  .min(0)
  .max(10)
  .step(0.001)
  .name("lightIntensity");
gui
  .add(directionalLight.position, "x")
  .min(-300)
  .max(300)
  .step(1)
  .name("lightX");
gui
  .add(directionalLight.position, "y")
  .min(-300)
  .max(300)
  .step(1)
  .name("lightY");
gui
  .add(directionalLight.position, "z")
  .min(-300)
  .max(300)
  .step(1)
  .name("lightZ");

/**
 * Update all materials
 */
const updateAllMaterials = () => {
  scene.traverse((child) => {
    if (
      child instanceof THREE.Mesh &&
      child.material instanceof THREE.MeshStandardMaterial
    ) {
      // child.material.envMap = environmentMap
      child.material.envMapIntensity = debugObject.envMapIntensity;
      child.material.needsUpdate = true;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
};

/**
 * Environment map
 */
const cubeTextureLoader = new THREE.CubeTextureLoader();
const environmentMap = cubeTextureLoader
  .setPath("textures/environmentMaps/")
  .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);

environmentMap.encoding = THREE.sRGBEncoding;

scene.background = environmentMap;
scene.environment = environmentMap;

debugObject.envMapIntensity = 5;
gui
  .add(debugObject, "envMapIntensity")
  .min(0)
  .max(200)
  .step(0.1)
  .onChange(updateAllMaterials);

/**
 * Models
 */

const gltfLoader = new GLTFLoader();
let iss;
gltfLoader.load(
  "./models/iss-station.gltf",
  (gltf) => {
    iss = gltf.scene;
    console.log("success");
    console.log(iss);

    iss.scale.set(2, 2, 2);
    // iss.position.set(0, 100, 0);
    // iss.rotation.x = Math.PI * 0.5;
    // iss.rotation.y = Math.PI * 1;

    fetch("https://api.wheretheiss.at/v1/satellites/25544")
      .then((response) => response.json())
      .then((data) => {
        const issRad = convertToRadians(100, data.latitude, data.longitude);
        const camRad = convertToRadians(160, data.latitude, data.longitude);
        console.log("visibility: ", data.visibility);

        iss.position.set(issRad[0], issRad[1], issRad[2]);
        tl.to(camera.position, {
          x: camRad[0],
          y: camRad[1],
          z: camRad[2],
          duration: 3,
        });
        tl.to(iss.position, {
          x: issRad[0],
          y: issRad[1],
          z: issRad[2],
          duration: 10,
          ease: "none",
        });

        iss.lookAt(0, 0, 0);
        iss.rotation.z = Math.PI * 0.4;
        prevPoint.set(issRad[0], issRad[1], issRad[2]);
        points.push(prevPoint);
      });

    scene.add(iss);
  },
  (progress) => {
    console.log("progress");
    console.log(progress);
  },
  (error) => {
    console.log("error");
    console.log(error);
  }
);

// Earth

const earthTexture = new THREE.TextureLoader().load(
  "images/earth_atmos_2048.jpg"
);
const earthNormalMap = new THREE.TextureLoader().load(
  "images/earth_normal_2048.jpg"
);
const earthRoughMap = new THREE.TextureLoader().load(
  "images/earth_roughness_2048.jpg"
);
earthTexture.wrapS = THREE.RepeatWrapping;
earthTexture.wrapT = THREE.RepeatWrapping;
// earthTexture.offset.set(0.5, 0);

const sphere = new THREE.SphereGeometry(90, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({
  //   color: 0x555555,
  map: earthTexture,
  roughness: 0.5,
  metalness: 0.2,
  normalMap: earthNormalMap,
  roughnessMap: earthRoughMap,
  // wireframe: true,
});
const earth = new THREE.Mesh(sphere, sphereMaterial);
earth.rotation.y = 1 * Math.PI;
scene.add(earth);

/**
 * Plot Previous Path Lines
 */
const issPastPlot = () => {
  const timestamp = Date.now() / 1000;
  const timeList = [];
  for (let i = 0; i < 3000; i = i + 300) {
    timeList.push(timestamp - i);
  }

  // call API
  let api =
    "https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=";
  api += timeList.join(",");

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log("data: ", data);
      const plotData = [];

      for (const element of data) {
        console.log("element.latitude: ", element.latitude);
        let point = new THREE.Vector3();
        const converted = convertToRadians(
          100,
          element.latitude,
          element.longitude
        );
        console.log(converted);
        point.set(converted[0], converted[1], converted[2]);
        console.log("point: ", point);
        plotData.push(point);
      }

      const pastlineGeometry = new THREE.BufferGeometry().setFromPoints(
        plotData
      );
      const pastlineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
      const pastline = new THREE.Line(pastlineGeometry, pastlineMaterial);
      scene.add(pastline);
    });
};

issPastPlot();

// -------------------------------------------------------------

const getISS = () => {
  fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then((response) => response.json())
    .then((data) => {
      const issRad = convertToRadians(100, data.latitude, data.longitude);

      moveISS(issRad[0], issRad[1], issRad[2]);
    });
};

const moveISS = (x, y, z) => {
  newPoint.set(x, y, z);
  points.push(newPoint);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
  const line = new THREE.Line(lineGeometry, lineMaterial);
  scene.add(line);

  iss.position.set(x, y, z);
  // tl.to(iss.position, { x, y, z, duration: 9, ease: "none" });
  iss.lookAt(0, 0, 0);
  iss.rotation.z = Math.PI * 0.4;
  prevPoint.set(x, y, z);
};

// gui.add(iss.position, "x").min(-300).max(300).step(1).name("issX");

const clock = new THREE.Clock();

let time = Date.now();

const animate = () => {
  requestAnimationFrame(animate);

  // getISS();
  // time

  controls.update();

  renderer.render(scene, camera);
};

setInterval(() => {
  getISS();
}, 10000);

animate();
