import * as THREE from "https://unpkg.com/three@0.125.1/build/three.module.js";
// import { OrbitControls } from "https://unpkg.com/three@0.125.1/examples/jsm/controls/OrbitControls.js";
// import * as axios from "https://unpkg.com/axios/dist/axios.min.js";
let vectorCoords = {};

const cartesionCoords = () =>
  axios.get("http://api.open-notify.org/iss-now.json").then((res) => {
    const coords = res.data;
    console.log(parseFloat(coords.iss_position.latitude), parseFloat(coords.iss_position.longitude))

    const earthRadius = 100; // in km
    const latitude = (parseFloat(coords.iss_position.latitude) * Math.PI) / 180;
    const longitude = (parseFloat(coords.iss_position.longitude) * Math.PI) / 180;
    x = earthRadius * Math.cos(latitude) * Math.cos(longitude);
    y = earthRadius * Math.cos(latitude) * Math.sin(longitude);
    z = earthRadius * Math.sin(latitude);

    const timestamp = new Date(coords.timestamp * 1000).toLocaleString(
      "en-US",
      { timeZone: "America/Chicago" }
    );

    console.log(
      `Cartesion Coordinates: ${vectorCoords.x}, ${vectorCoords.y}, ${vectorCoords.z}`
    );
    console.log(`Time: ${timestamp}`);

    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;
  });

//   console.log(`ISS Coordinates: ${latitude}, ${longitude}`);
// cartesionCoords();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const sphere = new THREE.SphereGeometry(90, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const earth = new THREE.Mesh(sphere, sphereMaterial);
scene.add(earth);

// const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 250;

const clock = new THREE.Clock();

const animate = () => {
  setTimeout(() => {
    cartesionCoords();
    requestAnimationFrame(animate);
  }, 5000);

  // time
  const elapsedTime = clock.getElapsedTime();

  // cube.rotation.x = elapsedTime;
  // cube.rotation.y = elapsedTime;

  // controls.update();

  renderer.render(scene, camera);
};

animate();
