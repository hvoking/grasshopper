import {
	WebGLRenderer, 
	PerspectiveCamera
} from 'three';
import { useEffect, useRef } from 'react';
import {OrbitControls} from './OrbitControls.js'
import { useScene } from '../../../context/SceneContext';
import Geometry from '../geometry/Geometry'

const Graph = () => {
	const canvasRef = useRef<null | HTMLDivElement>(null);
	const scene = useScene();
	useEffect(() => {
		const camera = createNewCamera();
		const renderer = createNewRenderer();
		// Set the controls 
		new OrbitControls( camera, renderer.domElement );
		// Add elements to the html 
		canvasRef.current && canvasRef.current.appendChild( renderer.domElement );
	  	const animate = () => {
		    requestAnimationFrame( animate );
		    renderer.render( scene, camera );
		  }
		animate();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const makeCamera = (fov: number =40): PerspectiveCamera => {
		const aspect = 2;
		const near = 0.1;
		const far = 1000;
		return new PerspectiveCamera(fov, aspect, near, far);
	}
	const createNewCamera = () => {
		const camera = makeCamera();
		camera.position.set(2, 2, 2).multiplyScalar(8);
		camera.lookAt(0, 0, 0);
		return camera

	}

	const createNewRenderer = (): WebGLRenderer => {
		// Set the initial renderer
		const renderer = new WebGLRenderer();
		renderer.setClearColor(0xd4d0c8);
		// renderer.setSize( window.innerWidth, window.innerHeight );
		return renderer
	}

	return (
		<div ref={canvasRef}>
			<Geometry />
		</div>
	)
}

Graph.displayName="Graph";
export default Graph;