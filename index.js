import {GLTFLoader} from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js';
import {RGBELoader} from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/RGBELoader.js';
import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';


// Set up
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xFEF4E6 );

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
//camera.position.xset(0,30,30);
camera.position.x =(0);
camera.position.y =(14);
camera.position.z =(13);

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias:true,
  canvas: document.querySelector('#bg'),
});

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


renderer.render(scene, camera);

// Load HDR Enviroment Map for metal reflection
new RGBELoader().setPath('assets/').load('comfy_cafe_4k.hdr',function(hdrmap){
  hdrmap.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = hdrmap;

  // load model
  const loader = new GLTFLoader();
  loader.load(
	// resource URL
	'assets/COFFEEGLTF.glb',
	// called when the resource is loaded
	function ( glb ) {

		scene.add( glb.scene );
    const root = glb.scene;
    
    root.scale.set(0.1,0.1,0.1);
    root.position.x = 10;
    animate(root)

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

});




// Light
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


// Helpers
const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200,50);
const axehelper = new THREE.AxesHelper(500);
scene.add(lightHelper, gridHelper, axehelper)

const controls = new OrbitControls(camera, renderer.domElement);


  //Scroll animation

  /*function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
 
    camera.position.z = t * -1;
    camera.position.x = t * -0.001;
    camera.rotation.y = t * -1.001;
  }
  
  document.body.onscroll = moveCamera;
  moveCamera();
  */

//Animate Loop
function animate(root) {
  requestAnimationFrame(animate);
  root.rotation.x += 0.005;


  controls.update();

  renderer.render(scene, camera);
}
