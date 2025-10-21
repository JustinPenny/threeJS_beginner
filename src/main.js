import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// playing with threejs and orbit controls. Want to make something neat to display or portfolio. Currently have a rotateable cube.

//https://threejs.org/docs/#examples/en/controls/OrbitControls

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//controls = new THREE.OrbitControls( camera, renderer.domElement );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const materials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Right face (+x)
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Left face (-x)
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Top face (+y)
    new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Bottom face (-y)
    new THREE.MeshBasicMaterial({ color: 0x00ffff }), // Front face (+z)
    new THREE.MeshBasicMaterial({ color: 0xff00ff })  // Back face (-z)
];

const geometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(geometry, materials);
scene.add( cube );

camera.position.z = 5;

function animate() {
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

const controls = new OrbitControls( camera, renderer.domElement );

