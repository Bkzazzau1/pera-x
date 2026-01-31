<script lang="ts">
	import { calculateOrbit, type OrbitalObject } from '$lib/logic/OrbitalEngine';
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { wallet } from '$lib/stores/wallet.svelte';

	let container: HTMLDivElement;
	let boostValue = 1;

	onMount(() => {
		if (!container) return;

		// 1. Cinematic Void Scene
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			40,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
			powerPreference: 'high-performance'
		});

		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 0.8;
		container.appendChild(renderer.domElement);

		// 2. The "Sovereign Core" (Crystalline Dark Matter)
		const planetGeom = new THREE.IcosahedronGeometry(1.4, 20);
		const planetMat = new THREE.MeshPhysicalMaterial({
			color: 0x075985,
			transmission: 1.0,
			thickness: 3.5,
			ior: 1.6,
			reflectivity: 0.9,
			clearcoat: 1.0
		});
		const planet = new THREE.Mesh(planetGeom, planetMat);
		scene.add(planet);

		// 3. Neural Network Lines: Sync Visualization
		const lineMaterial = new THREE.LineBasicMaterial({
			color: 0x3b82f6,
			transparent: true,
			opacity: 0.1
		});
		const lineGroup = new THREE.Group();
		scene.add(lineGroup);

		// 4. Premium Gadget Nodes
		const gadgetMeshes: THREE.Mesh[] = [];
		const orbitData: OrbitalObject[] = [];
		const connectionLines: THREE.Line[] = [];
		const gadgetGroup = new THREE.Group();
		scene.add(gadgetGroup);

		for (let i = 0; i < 12; i++) {
			const gGeom = new THREE.BoxGeometry(0.06, 0.1, 0.01);
			const gMat = new THREE.MeshPhysicalMaterial({
				color: 0x000000,
				emissive: 0x3b82f6,
				emissiveIntensity: 2.5,
				metalness: 1.0
			});
			const gMesh = new THREE.Mesh(gGeom, gMat);

			const orbit = {
				radius: 2.6 + Math.random() * 0.6,
				speed: 0.12 + Math.random() * 0.05,
				angle: (i / 12) * Math.PI * 2,
				yOffset: (Math.random() - 0.5) * 1.5
			};

			// Create a line for each neural connection
			const lineGeom = new THREE.BufferGeometry().setFromPoints([
				new THREE.Vector3(0, 0, 0),
				new THREE.Vector3(0, 0, 0)
			]);
			const line = new THREE.Line(lineGeom, lineMaterial);

			gadgetMeshes.push(gMesh);
			orbitData.push(orbit);
			connectionLines.push(line);
			gadgetGroup.add(gMesh);
			lineGroup.add(line);
		}

		// 5. Hard Contrast Lighting
		const spotLight = new THREE.SpotLight(0xffffff, 50);
		spotLight.position.set(10, 10, 10);
		const rimLight = new THREE.PointLight(0x3b82f6, 60);
		rimLight.position.set(-8, -4, -8);
		scene.add(new THREE.AmbientLight(0xffffff, 0.05), spotLight, rimLight);

		camera.position.z = 7;

		let frameId: number;

		function animate(time: number) {
			const delta = 0.016; // Standardized delta

			// TRANSITION LOGIC: Accelerate core
			if (wallet.transitionActive) {
				boostValue = THREE.MathUtils.lerp(boostValue, 15, 0.05);
				camera.fov = THREE.MathUtils.lerp(camera.fov, 65, 0.05);
				camera.updateProjectionMatrix();
			} else {
				boostValue = THREE.MathUtils.lerp(boostValue, 1, 0.02);
				camera.fov = THREE.MathUtils.lerp(camera.fov, 40, 0.02);
				camera.updateProjectionMatrix();
			}

			planet.rotation.y += 0.05 * boostValue;

			gadgetMeshes.forEach((mesh, i) => {
				const pos = calculateOrbit(orbitData[i], delta, boostValue);
				mesh.position.set(pos.x, pos.y, pos.z);
				mesh.lookAt(planet.position);

				// Update Neural Line Positions
				const positions = connectionLines[i].geometry.attributes.position.array as Float32Array;
				positions[3] = pos.x; // To Node X
				positions[4] = pos.y; // To Node Y
				positions[5] = pos.z; // To Node Z
				connectionLines[i].geometry.attributes.position.needsUpdate = true;

				// Neural Pulse Logic: Opacity fluctuates based on orbit speed
				const pulse = (Math.sin(time * 0.002 + i) + 1) / 2;
				(connectionLines[i].material as THREE.LineBasicMaterial).opacity = 0.05 + pulse * 0.15;
			});

			renderer.render(scene, camera);
			frameId = requestAnimationFrame(animate);
		}
		frameId = requestAnimationFrame(animate);

		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			if (frameId) cancelAnimationFrame(frameId);
			window.removeEventListener('resize', handleResize);
			renderer.dispose();
		};
	});
</script>

<div
	bind:this={container}
	class="planet-container pointer-events-none fixed inset-0 overflow-hidden"
	style="z-index: -10; background: radial-gradient(circle at center, rgba(2, 6, 23, 1) 0%, rgba(0, 0, 0, 1) 100%);"
></div>

<style>
	.planet-container :global(canvas) {
		display: block;
		filter: contrast(1.2) brightness(0.9);
	}
</style>
