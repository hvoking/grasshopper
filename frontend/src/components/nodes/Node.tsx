import Draggable from 'react-draggable';
import NodeOutputs from './NodeOutputs';
import NodeInputs from './NodeInputs';
import NodeName from './NodeName';
import Spline from './Spline';
import { useSplinePosition } from '../../context/Context';

import './Node.scss';

const Node = ({nodeItem}: {nodeItem: any}) => {
	const {splinePosition, splinePositionSet} = useSplinePosition();
	const setSplinePosition = (e: any, ui: any) => {
		splinePositionSet({x: ui.x, y: ui.y})
	}
	return (
		
			<div className="nodeWrapper" style={{visibility: nodeItem.node ? "visible" : "hidden"}}>
				<Draggable onDrag={setSplinePosition}>
					<div className="node">
						<NodeInputs nodeItem={nodeItem} />
						<NodeName nodeItem={nodeItem} />
						<NodeOutputs nodeItem={nodeItem} />
					</div>
				</Draggable>
				<Spline />
			</div>
		
	)
}

export default Node;