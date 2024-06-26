// React imports
import { useRef } from 'react';

// App imports
import { Outputs } from './outputs';
import { Inputs } from './inputs';
import { Name } from './name';
import './styles.scss';

// Third-party imports
import Draggable from 'react-draggable';

export const Node = ({nodeItem}: {nodeItem: any}) => {
	const nodeRef = useRef(null);
	
	return (
		<Draggable nodeRef={nodeRef}>
			<div ref={nodeRef} className="node">
				<Inputs nodeItem={nodeItem}/>
				<Name nodeItem={nodeItem}/>
				<Outputs nodeItem={nodeItem}/>
			</div>
		</Draggable>
	)
}

Node.displayName="Node";