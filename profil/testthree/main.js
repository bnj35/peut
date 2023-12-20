
import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio );
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

const geometry = new THREE.TorusGeometry(10,0.7,16,100)

const material = new THREE.MeshStandardMaterial({color:0xffffff });

const torus = new THREE.Mesh(geometry, material );

scene.add(torus)

const loader = new THREE.TextureLoader();
const planeTexture = loader.load('../public/img/CV.jpg');
const plane = new THREE.PlaneGeometry( 10, 14, 32 );
const map = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide, map:planeTexture} );
const planemesh = new THREE.Mesh( plane, map );
scene.add( planemesh );

const pointlight = new THREE.PointLight(0xffffff,80,200)
pointlight.position.set(10,0,10)


const ambientlight = new THREE.AmbientLight(0xffffff,2.8)
scene.add(pointlight,ambientlight)

/*const lighthelper = new THREE.PointLightHelper(pointlight)
const gridhelper = new THREE.GridHelper(200,50)
scene.add(lighthelper,gridhelper)*/

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
    const geometry = new THREE.OctahedronGeometry(0.24, 0);
    const material = new THREE.MeshStandardMaterial({color:0xffffff });
     const star = new THREE.Mesh(geometry, material );

const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100) ) ;
star.position.set(x, y , z);
scene.add(star);
}

Array(200).fill().forEach(addStar);
    

const spaceTexture = new THREE.TextureLoader().load('../public/img/gradient.jpg');
scene.background = spaceTexture;

function animate(){
    requestAnimationFrame(animate);

   torus.rotation.x += 0.01;
   torus.rotation.y += 0.005;
   torus.rotation.z += 0.005;

controls.update();

    renderer.render(scene,camera);
}

animate();





