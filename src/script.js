import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { GLTFLoader, GLTFAsset } from "three/examples/jsm/loaders/GLTFLoader.js";
// import axios from "axios";

// Debug
const gui = new dat.GUI();

/** 
 * SCENE
 */
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(
   75,
   window.innerWidth / window.innerHeight,
   0.1,
   1000
 );

/**
 * LIGHTS
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight);

gui.add(ambientLight, 'intensity').min(0).max(3).step(0.001)

const directionalLight = new THREE.DirectionalLight('#ffffff', 0.5)
directionalLight.castShadow = true
directionalLight.shadow.camera.far = 15
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.normalBias = 0.05
directionalLight.position.set(-180, 290, 200)
scene.add(directionalLight)

gui.add(directionalLight, 'intensity').min(0).max(10).step(0.001).name('lightIntensity')
gui.add(directionalLight.position, 'x').min(- 300).max(300).step(1).name('lightX')
gui.add(directionalLight.position, 'y').min(- 300).max(300).step(1).name('lightY')
gui.add(directionalLight.position, 'z').min(- 300).max(300).step(1).name('lightZ')


/**
 * Models
 */

const gltfLoader = new GLTFLoader();
let iss;
gltfLoader.load(
  "/models/iss-station.gltf",
  (gltf) => {
      iss = gltf.scene;
    console.log("success");
    console.log(iss);
    
    iss.scale.set(2, 2, 2)
    iss.position.set(0, 100, 0);
    iss.rotation.x = Math.PI * 0.5
    scene.add(iss)
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



const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

const earthTexture = new THREE.TextureLoader().load("images/globe.jpg");
earthTexture.wrapS = THREE.RepeatWrapping;
earthTexture.wrapT = THREE.RepeatWrapping;
earthTexture.offset.set(0.5, 0);

const sphere = new THREE.SphereGeometry(90, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({
//   color: 0x555555,
  map: earthTexture,
  // wireframe: true,
});
const earth = new THREE.Mesh(sphere, sphereMaterial);
scene.add(earth);

let prevPoint = new THREE.Vector3();
let newPoint = new THREE.Vector3();

const getISS = () => {
  fetch("http://api.open-notify.org/iss-now.json")
    .then((response) => response.json())
    .then((data) => {
      //   console.log("ISS API Data: ", data);
      moveISS(data);
    });
};

const moveISS = (coords) => {
  const points = [];
  points.push(prevPoint);
  const earthRadius = 100; // in km
  let radLat = (coords.iss_position.latitude * Math.PI) / 180;
  let radLong = (coords.iss_position.longitude * Math.PI) / 180;
  console.log(radLat, radLong);

  let x = -earthRadius * Math.cos(radLat) * Math.cos(radLong);
  let y = earthRadius * Math.sin(radLat);
  let z = earthRadius * Math.cos(radLat) * Math.sin(radLong);

  const timestamp = new Date(coords.timestamp * 1000).toLocaleString("en-US", {
    timeZone: "America/Chicago",
  });

  console.log(`Cartesion Coordinates: ${x}, ${y}, ${z}`);
  console.log(`Time: ${timestamp}`);

  console.log(iss);

  iss.position.set(x, y, z);
  iss.lookAt(0,0,0)

  newPoint.set(x, y, z);
  points.push(newPoint);
  console.log("Prev: ", prevPoint, "New: ", newPoint);
  console.log("Points: ", points);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
  const line = new THREE.Line(lineGeometry, lineMaterial);
  scene.add(line);
  prevPoint.set(x, y, z);
};

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 250;

const clock = new THREE.Clock();

let time = Date.now();

const animate = () => {
  requestAnimationFrame(animate);

  // time

  controls.update();

  renderer.render(scene, camera);
};

setInterval(() => {
  getISS();
}, 10000);

animate();
