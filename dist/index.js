import {GLTFLoader} from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js';
import {RGBELoader} from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/RGBELoader.js';
import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';


// Canvas
const canvas = document.querySelector('canvas')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color( 0xFEF4E6 );


// Material
// const material = new THREE.MeshToonMaterial({ color: '#ffeded' })

// // Meshes
// const mesh1 = new THREE.Mesh(
//     new THREE.TorusGeometry(1, 0.4, 16, 60),
//     material
// )
// const mesh2 = new THREE.Mesh(
//     new THREE.ConeGeometry(1, 2, 32),
//     material
// )
// const mesh3 = new THREE.Mesh(
//     new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
//     material
// )

// scene.add(mesh1, mesh2, mesh3)

const loader = new GLTFLoader();
var beans;
loader.load(
	// resource URL
	'assets/BEANSGLTF.glb',
	// called when the resource is loaded
	function ( glb ) {

	scene.add( glb.scene );
    beans = glb.scene;
	beans.position.y = (-objectsDistance * 2.3)-1.5;
	beans.position.z = 0;
	beans.position.x = -1.5;
	beans.scale.set(0.011,0.011,0.011);

	tick()

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
    
	root.position.y = (-objectsDistance * 0)-1.2;
	root.position.z = -2;
	root.position.x = 2;
	root.rotation.y = -0.6;
	root.scale.set(0.033,0.033,0.033);
 

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

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//const controls = new OrbitControls(camera, renderer.domElement);
//const gridHelper = new THREE.GridHelper(200,50);
//scene.add(gridHelper)

const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)
//Light
const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.set(2, 3, 4);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const objectsDistance = 4
// mesh1.position.y = - objectsDistance * 0
// mesh2.position.y = - objectsDistance * 1
// mesh3.position.y = - objectsDistance * 2

let scrollY = window.scrollY

window.addEventListener('scroll', () =>
{
    scrollY = window.scrollY

    console.log(scrollY)
})


const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
	
	beans.rotation.y = elapsedTime * 0.5

	camera.position.y = -scrollY/sizes.height * objectsDistance

	//controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}



//yes
// Set up
// const scene = new THREE.Scene();
// //scene.background = new THREE.Color( 0xFEF4E6 );

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// //camera.position.xset(0,30,30);
// camera.position.x =(0);
// camera.position.z =(0);

// const renderer = new THREE.WebGLRenderer({
//   alpha: true,
//   antialias:true,
//   canvas: document.querySelector('#bg'),
// });

// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 1.25;

// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);


// renderer.render(scene, camera);

// // Load HDR Enviroment Map for metal reflection
// new RGBELoader().setPath('assets/').load('comfy_cafe_4k.hdr',function(hdrmap){
//   hdrmap.mapping = THREE.EquirectangularReflectionMapping;
//   scene.environment = hdrmap;

//   // load model
//   const loader = new GLTFLoader();
//   loader.load(
// 	// resource URL
// 	'assets/COFFEEGLTF.glb',
// 	// called when the resource is loaded
// 	function ( glb ) {

// 		scene.add( glb.scene );
//     const root = glb.scene;
    
//     root.scale.set(0.1,0.1,0.1);
//     root.position.set(0,-20,-16)

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

// });

// const geometry = new THREE.BoxGeometry(3.5,5,0.5);
// const material = new THREE.MeshBasicMaterial({color:0x00ff00});
// const cube = new THREE.Mesh(geometry,material);
// scene.add(cube);


// const loader = new GLTFLoader();
// var beans;
// loader.load(
// 	// resource URL
// 	'assets/BEANSGLTF.glb',
// 	// called when the resource is loaded
// 	function ( glb ) {

// 		scene.add( glb.scene );
//     beans = glb.scene;
    
//     beans.scale.set(0.03,0.03,0.03);
//     beans.position.set(0,0,-10)

//     animate();
    
//     window.addEventListener("scroll", function(){
//       aimTimeLine = window.pageYOffset / 3000
//     })

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );





// // Light
// const pointLight = new THREE.PointLight(0xffffff, 0.1);
// pointLight.position.set(2, 3, 4);

// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(pointLight, ambientLight);


// // Helpers
// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200,50);
// const axehelper = new THREE.AxesHelper(500);
// scene.add(lightHelper, gridHelper, axehelper)

// const controls = new OrbitControls(camera, renderer.domElement);

// let currentTimeLine = window.pageYOffset/ 3000
// let aimTimeLine = window.pageYOffset/ 3000

// //scroll animation
// // function moveCamera(){
  
// //   const t = document.body.getBoundingClientRect().top;

// //   beans.rotation.y += 0.05;
  
// //   camera.position.z = t*-0.1  ;
// //   camera.position.x = t*-0.0002;
// //   camera.position.y = t*-0.0002;

// // }

// // document.body.onscroll = moveCamera

// //Animate Loop
// function animate() {
//   requestAnimationFrame(animate);

  
//   currentTimeLine += (aimTimeLine - currentTimeLine) * 0.01

//   const ry = currentTimeLine * Math.PI * 2
//   beans.rotation.set(0,ry,0)

//   controls.update();

//   renderer.render(scene, camera);
// }



