// React imports
import { useEffect, useRef } from 'react';

// App imports
import { Grid } from './grid';
import { Nodes } from './nodes';
import { Search } from './search';
import { OrbitControls } from './orbit';
import './styles.scss';

// Context imports
import { useFilters } from '../context/filters';
import { useSpline } from '../context/spline';
import { useCanvas } from '../context/three/canvas';

export const Canvas = () => {
	const canvasRef = useRef<null | HTMLDivElement>(null);

	const { deActivateSearchBox, activeSearchBox } = useFilters();
	const { getSplinePosition } = useSpline();
	const { camera, renderer } = useCanvas();
	
	useEffect(() => {
		new OrbitControls( camera, renderer.domElement );
		canvasRef.current && canvasRef.current.appendChild( renderer.domElement );
	}, []);

	return (
		<div
			className="canvas-wrapper"
			ref={canvasRef}
			onClick={deActivateSearchBox} 
			onDoubleClick={activeSearchBox}
			onMouseMove={getSplinePosition}
		>
			<Search/>
			<Nodes/>
			<Grid/>
		</div>
	)
}

Canvas.displayName="Canvas";