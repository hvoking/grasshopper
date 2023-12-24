// App imports
import { Nodes } from './nodes';
import { Graph } from './graph';
import { Search } from '../search';
import './styles.scss';

// Context imports
import { useParameters } from '../context/parameters';
import { useSpline } from '../context/spline';

export const ThreejsCanvas = () => {
	const { deActivateSearchBox, activeSearchBox } = useParameters();
	const { setSplineEndPosition } = useSpline();

	const onMouseMove = (e: any) => {
		const x = e.clientX;
		const y = e.clientY - 180;
		setSplineEndPosition({x: x, y: y});
	};

	return (
		<div
			className="canvas-wrapper" 
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

ThreejsCanvas.displayName="ThreejsCanvas";