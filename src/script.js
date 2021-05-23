import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import axios from "axios";
import gsap from "gsap";
import { issLocation, convertToRadians } from "./issdata.js";

import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import atmosVertexShader from './shaders/atmosVertex.glsl';
import atmosFragmentShader from './shaders/atmosFragment.glsl';

// import icon from "./assets/images/GitHub-Mark-Light-32px.png";
// const gitIcon = new Image();
// gitIcon.src = icon;
// document.getElementById("githublogo").appendChild(gitIcon);

// Debug
const gui = new dat.GUI();
dat.GUI.toggleHide();
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


const renderer = new THREE.WebGLRenderer({
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("canvas").appendChild(renderer.domElement);

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
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

gui.add(ambientLight, "intensity").min(0).max(3).step(0.001);

const directionalLight = new THREE.DirectionalLight("#fcffbe", 1);
// directionalLight.castShadow = true;
// directionalLight.shadow.camera.far = 15;
// directionalLight.shadow.mapSize.set(1024, 1024);
// directionalLight.shadow.normalBias = 0.05;
// directionalLight.position.set(90, -80, 145);

const directionalLight2 = new THREE.DirectionalLight("#bee2ff", 1);
directionalLight2.position.set(0, 120, -180);
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
  .max(500)
  .step(1)
  .name("lightY");
gui
  .add(directionalLight.position, "z")
  .min(-300)
  .max(300)
  .step(1)
  .name("lightZ");

gui
  .add(directionalLight2, "intensity")
  .min(0)
  .max(10)
  .step(0.001)
  .name("2lightIntensity");
gui
  .add(directionalLight2.position, "x")
  .min(-300)
  .max(300)
  .step(1)
  .name("2lightX");
gui
  .add(directionalLight2.position, "y")
  .min(-300)
  .max(300)
  .step(1)
  .name("2lightY");
gui
  .add(directionalLight2.position, "z")
  .min(-300)
  .max(300)
  .step(1)
  .name("2lightZ");

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
const sphereMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uEarthTexture: {
      value: new THREE.TextureLoader().load("images/earth_atmos_2048.jpg")
    }
  },
  // map: earthTexture,
  // roughness: 0.5,
  // metalness: 0.2,
  // normalMap: earthNormalMap,
  // roughnessMap: earthRoughMap,
  // wireframe: true,
});

const earth = new THREE.Mesh(sphere, sphereMaterial);
earth.rotation.y = 1 * Math.PI;
scene.add(earth);

// atmospheric glow
const sphere2 = new THREE.SphereGeometry(95, 32, 32);
const atmosphereMaterial = new THREE.ShaderMaterial({
  vertexShader: atmosVertexShader,
  fragmentShader: atmosFragmentShader,
  blending: THREE.AdditiveBlending,
  side: THREE.BackSide
});

const atmosphere = new THREE.Mesh(sphere2, atmosphereMaterial);
scene.add(atmosphere);
/**
 * Plot Previous Path Lines
 */
const pastPlotData = [];
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

      for (const element of data) {
        let point = new THREE.Vector3();
        const converted = convertToRadians(
          100,
          element.latitude,
          element.longitude
        );
        point.set(converted[0], converted[1], converted[2]);
        // console.log("point: ", point);
        pastPlotData.push(point);
      }

      const pastlineGeometry = new THREE.BufferGeometry().setFromPoints(
        pastPlotData
      );
      const pastlineMaterial = new THREE.LineDashedMaterial({
        color: 0xffff00,
        linewidth: 1,
        scale: 10,
        dashSize: 3,
        gapSize: 10,
      });
      const pastline = new THREE.Line(pastlineGeometry, pastlineMaterial);
      scene.add(pastline);
      pastline.computeLineDistances();
    });
};

issPastPlot();

// -------------------------------------------------------------

const stats = (params) => {
  console.log('params: ', params);
  // Google Maps; z= Zoom level
  const googleMaps = `<a target="_blank" href="https://www.google.com/maps/place/${params.latitude},${params.longitude}/@${params.latitude},${params.longitude},8z">Link</a>`;
  document.getElementById("latitude").innerHTML = params.latitude;
  document.getElementById("longitude").innerHTML = params.longitude;
  document.getElementById("altitude").innerHTML = params.altitude.toFixed(2);
  document.getElementById("velocity").innerHTML = params.velocity.toFixed(0);
  document.getElementById("visibility").innerHTML = params.visibility;
  document.getElementById("googlemap").innerHTML = googleMaps;
}

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
        // console.log("visibility: ", data.visibility);
        stats(data);
        // document.getElementById("coords").innerHTML = `${data.latitude}, ${data.longitude}`;

        iss.position.set(issRad[0], issRad[1], issRad[2]);
        iss.lookAt(0, 0, 0);

        tl.to(camera.position, {
          x: camRad[0],
          y: camRad[1],
          z: camRad[2],
          duration: 3,
        });

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

const getISS = () => {
  fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then((response) => response.json())
    .then((data) => {
      const issRad = convertToRadians(100, data.latitude, data.longitude);

      stats(data)

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
  // iss.lookAt(prevPoint.x, prevPoint.y, prevPoint.z);
  // iss.rotation.x = Math.PI * 2;
  // iss.rotation.y = Math.PI * 2;
  prevPoint.set(x, y, z);
};

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
}, 3000);

animate();
