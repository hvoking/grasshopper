// React imports
import { useRef } from 'react';

// Third-party imports
import Draggable from 'react-draggable';

// App imports
import { Outputs } from './outputs';
import { Inputs } from './inputs';
import { Name } from './name';
import './styles.scss';

export const Node = ({nodeItem}: {nodeItem: any}) => {
	const nodeRef = useRef(null);
	return (
			<>
				{nodeItem.output && <Draggable nodeRef={nodeRef}>
					<div ref={nodeRef} className="node">
						<Inputs nodeItem={nodeItem} />
						<Name nodeItem={nodeItem} />
						<Outputs nodeItem={nodeItem} />
					</div>
				</Draggable>}
			</>
		
	)
}

Node.displayName="Node";