import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const section = document.querySelector("section.car")

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
section.appendChild( renderer.domElement );

// Load the model
const loader = new GLTFLoader();

// Global variable to store the car model
let carModel = null;

// Load a glTF resource
loader.load(
	// resource URL
	'/models/scene.gltf',
	// called when the resource is loaded
	async function ( gltf ) {
            // Code that upscales the car because it was very small in the beginning
            const box = new THREE.Box3().setFromObject(gltf.scene);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());

            // Normalize size — aim for ~1–10 units in world space
            const maxAxis = Math.max(size.x, size.y, size.z);
            const scaleFactor = 5.0 / maxAxis; // scale to 5 units wide
            gltf.scene.scale.setScalar(scaleFactor);

            // Center it
            gltf.scene.position.sub(center.multiplyScalar(scaleFactor));

            // --- Add to scene and store reference ---
            scene.add(gltf.scene);
            carModel = gltf.scene;
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

// Camera + lighting
camera.position.set(0, 0.7, 5);
camera.lookAt(0, 0, 0);

const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 5);
scene.add(ambientLight);


// --- Animation loop ---
function animate() {
    if (carModel) {
    // Rotate the model each frame
    carModel.rotation.y += 0.001;
    }
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );