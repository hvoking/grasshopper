// App imports
import { Nodes } from './nodes';
import { Search } from './search';
import { Spline } from './spline';
import { Graph } from './graph'

// Context imports
import { useParameters } from './context/parameters';
import { useSpline } from './context/spline';

export const Main = () => {
	const { deActivateSearchBox, activeSearchBox, searchBox } = useParameters();
	const { activeSpline, setSplineEndPosition } = useSpline();

	const onMouseMove = (e: any) => {
		setSplineEndPosition({x: e.clientX, y: e.clientY - 180});
	};

	return (
		<div
			className="main" 
			onClick={deActivateSearchBox} 
			onDoubleClick={activeSearchBox}
			onMouseMove={onMouseMove}
		>
			<Graph/>
			{activeSpline && <Spline/>}
			{searchBox && <Search/>}
			<Nodes/>
		</div>
	)
}

Main.displayName="Main";