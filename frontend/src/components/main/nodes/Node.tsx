// React imports
import { useRef } from 'react';

// Third-party imports
import Draggable from 'react-draggable';

// App imports
import { NodeOutputs } from './NodeOutputs';
import { NodeInputs } from './NodeInputs';
import { NodeName } from './NodeName';
import './styles.scss';

export const Node = ({nodeItem}: {nodeItem: any}) => {
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