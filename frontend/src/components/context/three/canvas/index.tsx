// React imports
import { useEffect, useContext, createContext } from 'react';

// Third-party imports
import * as THREE from 'three';

const CanvasContext: React.Context<any> = createContext(null)

export const useCanvas = () => {
	return (
		useContext(CanvasContext)
	)
}

export const CanvasProvider = ({children}: any) => {
	const scene = new THREE.Scene();
	const renderer = new THREE.WebGLRenderer();
	const camera = new THREE.PerspectiveCamera(10, 2, 0.1, 1000);

	camera.position.set(2, 2, 2).multiplyScalar(8);
	camera.lookAt(0, 0, 0);

	renderer.setClearColor(0xd4d0c8);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize( window.innerWidth, window.innerHeight - 198 );

	const clearScene = (scene: any) => {
		while (scene.children.length)
		{
		    scene.remove(scene.children[0]);
		}
	}

	useEffect(() => {
	  	const animate = () => {
		    requestAnimationFrame( animate );
		    renderer.render( scene, camera );
		}
		animate();
	}, []);

	return (
		<CanvasContext.Provider value={{ renderer, scene, clearScene, camera }}>
			{children}
		</CanvasContext.Provider>
	)
}

CanvasContext.displayName = "CanvasContext";