
import * as THREE from 'three';

// init
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 2;

const scene = new THREE.Scene();

