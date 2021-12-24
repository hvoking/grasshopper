import Draggable from 'react-draggable';
import NodeOutputs from './NodeOutputs';
import NodeInputs from './NodeInputs';
import NodeName from './NodeName';
import { useRef } from 'react';
import './Node.scss';

const Node = ({nodeItem}: {nodeItem: any}) => {
	const nodeRef = useRef(null);
	return (
			<>
				{nodeItem.output && <Draggable nodeRef={nodeRef}>
					<div ref={nodeRef} className="node">
						<NodeInputs nodeItem={nodeItem} />
						<NodeName nodeItem={nodeItem} />
						<NodeOutputs nodeItem={nodeItem} />
					</div>
				</Draggable>}
			</>
		
	)
}

Node.displayName="Node";
export default Node;