import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// canvas
const canvas = document.querySelector("canvas#three-ex");
const scene = new THREE.Scene();

//lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 50);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

//sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  1,
  1000
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
//duck
let gltfDuck = null;

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

//make a plane
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(5, 5),
  new THREE.MeshStandardMaterial({ color: "#657997" })
);
plane.rotation.x = -Math.PI * 0.5;
plane.position.y = -0.65;

scene.add(plane);

//GLTF
const gltfLoader = new GLTFLoader();
let gltfModel = null;
try {
  gltfModel = await gltfLoader.loadAsync("model/Fox/glTF/Fox.gltf");
  gltfDuck = await gltfLoader.loadAsync("model/Duck/glTF/Duck.gltf");
  //   console.log(gltfModel);
  //   addAndRun(gltfModel);

  let objs = [];
  objs.push(gltfModel);
  objs.push(gltfDuck);
  addAndRun(objs);
} catch (error) {
  console.log(error.message);
}

window.requestAnimationFrame(animate);
function addAndRun(loadedObjsArray) {
  let foxModel = loadedObjsArray[0].scene.children[0];
  let duckModel = loadedObjsArray[1].scene.children[0];

  foxModel.scale.set(0.015, 0.015, 0.015);

  console.log(duckModel.scale);
  //set scale
  duckModel.scale.x -= 0.005;
  duckModel.scale.y -= 0.005;
  duckModel.scale.z -= 0.005;

  //set pos
  duckModel.position.x = 1;
  foxModel.position.z = -5;

  scene.add(foxModel);
  scene.add(duckModel);
}
function animate() {
  // Update controls
  controls.update();
  // Render
  renderer.render(scene, camera);
  foxModel.position.z += 0.01;

  window.requestAnimationFrame(animate);
}
