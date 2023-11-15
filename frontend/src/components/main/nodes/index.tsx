// App imports
import { Node } from './Node';

// Context imports
import { useParameters } from '../context/parameters';

export const Nodes = () => {
	const { nodesAdded } = useParameters();
	
	return (
		<>
			{nodesAdded.map((item: any, index: number) => {
				return (
					<Node key={index} nodeItem={item} />
				)
			})}
		</>
	)
}

Nodes.displayName="Nodes";