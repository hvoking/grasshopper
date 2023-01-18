// App imports
import { Node } from './Node';

// Context imports
import { usePosition } from '../context/MainContext';

export const Nodes = () => {
	const { nodesAdded } = usePosition()
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