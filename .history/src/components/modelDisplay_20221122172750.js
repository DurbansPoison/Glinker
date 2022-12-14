
import * as THREE from 'three';
import DIY from '../assets/models/db9-slim-diy.glb'

// init
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 2;

const scene = new THREE.Scene();


const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshNormalMaterial();


const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
