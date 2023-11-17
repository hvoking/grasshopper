// App imports
import { Node } from './node';
import { Spline } from './spline';

// Context imports
import { useParameters } from '../../context/parameters';

export const Nodes = () => {
	const { nodesAdded } = useParameters();
	
	return (
		<>
			{nodesAdded.map((item: any, index: number) => {
				return (
					<div key={index}>
						<Node nodeItem={item}/>
						<Spline/>
					</div>
				)
			})}
		</>
	)
}

Nodes.displayName="Nodes";