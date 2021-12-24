import { usePosition } from '../../../context/MainContext';
import Node from './Node';

const Nodes = () => {
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
export default Nodes;