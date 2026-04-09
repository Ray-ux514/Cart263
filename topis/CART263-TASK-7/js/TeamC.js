import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// Planet class for Team C
export class PlanetC {
  constructor(scene, orbitRadius, orbitSpeed) {
    this.scene = scene;
    this.orbitRadius = orbitRadius;
    this.orbitSpeed = orbitSpeed;
    this.angle = Math.random() * Math.PI * 2;

    //Create planet group
    this.group = new THREE.Group();

    // Create planet
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const geometry2 = new THREE.SphereGeometry(3, 16, 16);

    const material = new THREE.MeshStandardMaterial({
      color: "#FFC0CB",
    });
    const material2 = new THREE.MeshStandardMaterial({
      color: "#FFCE1B",
    });

    const mesh = new THREE.Mesh(geometry, material);
    const mesh2 = new THREE.Mesh(geometry2, material2);

    this.group.add(mesh);
    this.group.add(mesh2);

    mesh2.position.x = 20;
    mesh2.position.y = 20;

    // Castshadow
    mesh.castShadow = true;
    mesh.receivecastShadow = true;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x080812); // Dim ambient for space
    scene.add(ambientLight);
    ambientLight.intensity = 5;

    //models

    // Create planet
    //STEP 1:
    //TODO: Create a planet using THREE.SphereGeometry (Radius must be between 1.5 and 2).
    //TODO: Give it a custom material using THREE.MeshStandardMaterial.
    //TODO: Use castShadow and receiveShadow on the mesh and all future ones so they can cast and receive shadows.
    //TODO: Add the planet mesh to the planet group.

    //STEP 2:
    //TODO: Add from 1 to 3 orbiting moons to the planet group.
    //TODO: The moons should rotate around the planet just like the planet group rotates around the Sun.

    //STEP 3:
    //TODO: Load Blender models to populate the planet with multiple props and critters by adding them to the planet group.
    //TODO: Make sure to rotate the models so they are oriented correctly relative to the surface of the planet.

    //STEP 4:
    //TODO: Use raycasting in the click() method below to detect clicks on the models, and make an animation happen when a model is clicked.
    //TODO: Use your imagination and creativity!

    this.loadModels();
    this.scene.add(this.group);
  }

  async loadModels() {
    const gltfLoader = new GLTFLoader();

    let gltfskull = null;

    try {
      gltfskull = await gltfLoader.loadAsync(
        "../models/low-poly_skull/scene.gltf"
      );
      console.log(gltfskull);
      this.skull = gltfskull.scene.children[0];
      // this.group.add(gltfskull.scene.children[0]);
      this.group.add(this.skull);

      // this.skull.position.x = 20;
      // this.skull.position.y = 40;
    } catch (error) {
      console.log(error.message);
    }
  }

  update(delta) {
    // Orbit around sun
    this.angle += this.orbitSpeed * delta * 30;
    this.group.position.x = Math.cos(this.angle) * this.orbitRadius;
    this.group.position.z = Math.sin(this.angle) * this.orbitRadius;

    this.skull.position.x = Math.cos(this.angle) * this.orbitRadius;
    this.skull.position.z = Math.sin(this.angle) * this.orbitRadius;

    // Rotate planet
    this.group.rotation.y += delta * 0.5;

    //TODO: Do the moon orbits and the model animations here.
  }

  click(mouse, scene, camera) {
    //TODO: Do the raycasting here.
  }
}
