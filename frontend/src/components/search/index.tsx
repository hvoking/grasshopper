// App imports
import { NodesList } from './nodes';
import { NodesInputs } from './inputs';
import './styles.scss';

// Context imports
import { useFilters } from '../context/filters';

export const Search = () => {
	const { position, searchBox } = useFilters();

	const x = position.x - 100;
	const y = position.y - 40;

	const boxPosition = {left: x, top: y}

	if (!searchBox) return <></>

	return (
		<div 
			className="search-box" 
			style={boxPosition}
		>
			<NodesInputs/>
			<NodesList/>
		</div>
	)
}

Search.displayName="Search";