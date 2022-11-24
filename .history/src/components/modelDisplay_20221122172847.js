
import * as THREE from 'three';
import DIY from '../assets/models/db9-slim-diy.glb';

// init
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 2;

const scene = new THREE.Scene();


const geometry = new THREE.DIY(0.2, 0.2, 0.2);
const material = new THREE.MeshNormalMaterial();


const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// animation
function animation(time) {
  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;

  renderer.render(scene, camera);
}
