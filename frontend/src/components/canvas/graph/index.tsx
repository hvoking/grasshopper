// React imports
import { useEffect, useRef } from 'react';

// App imports
import { OrbitControls } from './orbit'
import { Geometry } from './geometry';

// Context imports
import { useParameters } from '../../context/parameters';

// Third-party imports
import { WebGLRenderer, PerspectiveCamera } from 'three';

const makeCamera = (fov: number = 10): PerspectiveCamera => {
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

export const Graph = () => {
	const { scene } = useParameters();

	const canvasRef = useRef<null | HTMLDivElement>(null);
	
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
	}, [])

	return (
		<div ref={canvasRef}>
			<Geometry/>
		</div>
	)
}

Graph.displayName="Graph";