// React imports
import { useEffect, useRef } from 'react';

// App imports
import { OrbitControls } from './orbit'
import { Geometry } from './geometry';

// Context imports
import { useParameters } from '../../context/parameters';
import { useCamera } from '../../context/three/camera';
import { useRenderer } from '../../context/three/renderer';

export const Graph = () => {
	const canvasRef = useRef<null | HTMLDivElement>(null);
	const { scene } = useParameters();
	const { createNewCamera } = useCamera();
	const { createNewRenderer } = useRenderer();
	
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