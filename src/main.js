import * as THREE from "three";
import { setupControls } from "./controls.js";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf4f4f4);

// Camera (your eye in 3D world)
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// making the canvas fullscreen and responsive
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// THIS is the “connection line” (IMPORTANT)
setupControls(cube);

// Animate
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();