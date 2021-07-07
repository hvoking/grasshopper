import {
	WebGLRenderer, 
	PerspectiveCamera
} from 'three';
import { useEffect, useRef } from 'react';
import {OrbitControls} from './canvas/OrbitControls.js'
// import Geometry from '../geometry/Geometry';
import { useScene } from '../../context/SceneContext';

import Nodes from './nodes/Nodes';
import SearchBar from './searchBar/SearchBar';
import Spline from './spline/Spline';


import { usePosition } from '../../context/MainContext';
import { useSplinePosition } from '../../context/SplineContext';

const Main = () => {
	const canvasRef = useRef<null | HTMLDivElement>(null);
	const { deActivateSearchBox, activeSearchBox, searchBox } = usePosition()
	const { activeSpline, splineEndPositionSet } = useSplinePosition()
	const onMouseMove = (e: any) => {
		splineEndPositionSet({x: e.clientX, y: e.clientY - 180});
	}
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
		renderer.setClearColor(0xAAAAAA);
		renderer.setSize( window.innerWidth, window.innerHeight );
		return renderer
	}

	
	return (
		<div
			ref={canvasRef}
			className="main" 
			onClick={deActivateSearchBox} 
			onDoubleClick={activeSearchBox}
			onMouseMove={onMouseMove}
			>
			{activeSpline && <Spline />}
			{searchBox && <SearchBar />}
			<Nodes />
		</div>
			
	)
}

export default Main;
