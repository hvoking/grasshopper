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
import Graph from './canvas/Graph'

const Main = () => {
	const { deActivateSearchBox, activeSearchBox, searchBox } = usePosition()
	const { activeSpline, splineEndPositionSet } = useSplinePosition()
	const onMouseMove = (e: any) => {
		splineEndPositionSet({x: e.clientX, y: e.clientY - 180});
	}	
	return (
		<div
			className="main" 
			onClick={deActivateSearchBox} 
			onDoubleClick={activeSearchBox}
			onMouseMove={onMouseMove}
			>
			<Graph />
			{activeSpline && <Spline />}
			{searchBox && <SearchBar />}
			<Nodes />
		</div>
			
	)
}

export default Main;
