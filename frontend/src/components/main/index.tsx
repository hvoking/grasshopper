// App imports
import { Nodes } from './nodes';
import { Search } from './search';
import { Graph } from './graph';
import './styles.scss';

// Context imports
import { useParameters } from '../context/parameters';
import { useSpline } from '../context/spline';

export const Main = () => {
	const { deActivateSearchBox, activeSearchBox } = useParameters();
	const { setSplineEndPosition } = useSpline();

	const onMouseMove = (e: any) => {
		const x = e.clientX;
		const y = e.clientY - 180;
		setSplineEndPosition({x: x, y: y});
	};

	return (
		<div
			className="main-wrapper" 
			onClick={deActivateSearchBox} 
			onDoubleClick={activeSearchBox}
			onMouseMove={onMouseMove}
		>
			<Graph/>
			<Search/>
			<Nodes/>
		</div>
	)
}

Main.displayName="Main";