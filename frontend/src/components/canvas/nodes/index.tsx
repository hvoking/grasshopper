// App imports
import { Node } from './node';
import { Spline } from './spline';

// Context imports
import { useFilters } from '../../context/filters';

export const Nodes = () => {
	const { nodesAdded } = useFilters();
	
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