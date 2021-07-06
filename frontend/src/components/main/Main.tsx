import { usePosition } from '../../context/MainContext';
import { useSplinePosition } from '../../context/SplineContext';
import Nodes from './nodes/Nodes';
import SearchBar from './searchBar/SearchBar';
import Spline from './spline/Spline';

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
				{activeSpline && <Spline />}
				{searchBox && <SearchBar />}
				<Nodes />
			</div>
	)
}

export default Main;
