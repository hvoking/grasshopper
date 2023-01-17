// App imports
// import { Geometry } from '../geometry';
import { Nodes } from './nodes/Nodes';
import { SearchBar } from './searchBar';
import { Spline } from './spline';
import { Graph } from './graph'

// Context imports
import { useScene } from '../../context/SceneContext';
import { usePosition } from '../../context/MainContext';
import { useSplinePosition } from '../../context/SplineContext';

export const Main = () => {
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
			<Graph/>
			{activeSpline && <Spline/>}
			{searchBox && <SearchBar/>}
			<Nodes/>
		</div>
			
	)
}

Main.displayName="Main";