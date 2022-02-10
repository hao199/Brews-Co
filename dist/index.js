import {OBJLoader} from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/OBJLoader.js';
import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';


//Set up
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);



//Shape
const circle = new THREE.Mesh(
  new THREE.TorusGeometry(10, 3, 16, 100),
  new THREE.MeshStandardMaterial({ color: 0xFF6347})
);

scene.add(circle);

circle.position.z = 0;
circle.position.x = 30;

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);

scene.add(moon);

moon.position.z = 0;
moon.position.x = (-30);
moon.position.y = (-20)

const loader = new OBJLoader();

// load a resource
loader.load(
	// resource URL
	'assets/coffee.obj',
	// called when resource is loaded
	function ( object ) {

		scene.add( object );
    object.position.z = -100
    object.position.x = (0)
    object.position.y = (-20)


	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);





//Light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//Helpers
const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200,50);
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

//Stars
function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);
  
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));
  
    star.position.set(x, y, z);
    scene.add(star);
  }
  
  Array(200).fill().forEach(addStar);



  //background

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
function animate() {
    requestAnimationFrame(animate);

 

    controls.update();

    renderer.render(scene, camera);
}

animate()