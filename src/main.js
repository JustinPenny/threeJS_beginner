import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// struggling with deployment - gtfl/glb object files don't load when deployed.
// next attempt is to host the file in an s3 bucket and link to it in code


// Setup and creation of display elements
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// ambient lighting
const light = new THREE.AmbientLight( 0x404040, 15 ); // soft white light
scene.add( light );

// background color, couldn't make an image work
const color = new THREE.Color().setHex(0x87CEEB);
scene.background = color;



// Instantiate a loader
const loader = new GLTFLoader();

// Load a glTF resource
loader.load(
	// resource URL
	'public/my_house.glb',
	function ( gltf ) {
		scene.add( gltf.scene );
	},
	// called while loading is progressing
	function ( xhr ) {
    let width = ( xhr.loaded / xhr.total * 100 );
		console.log(width);
	},
	// called when loading has errors
	function ( error ) {
		console.log( 'An error happened' );
		alert("Error loading three.js resource")
	}
);


camera.position.z = 2;

function animate() {
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

// Rotational Controls
const controls = new OrbitControls( camera, renderer.domElement );

