// App imports
import { NodesList } from './nodes';
import { NodesInputs } from './inputs';
import './styles.scss';

// Context imports
import { useParameters } from '../../context/parameters';

export const Search = () => {
	const { position, searchBox } = useParameters();

	const x = position.x - 100;
	const y = position.y - 40;

	if (!searchBox) return <></>

	return (
		<div className="search-box" style={{left: x, top: y}}>
			<label className="node-label" htmlFor="search-box">
				Enter a keyword...
			</label>
			<NodesInputs/>
			<NodesList/>
		</div>
	)
}

Search.displayName="Search";