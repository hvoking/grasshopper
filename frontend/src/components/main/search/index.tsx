// App imports
import { NodesList } from './nodes';
import { NodesInputs } from './inputs';
import './styles.scss';

// Context imports
import { useSearch } from '../../context/search';
import { useParameters } from '../../context/parameters';
import { useSearchApi } from '../../context/api/search';

export const Search = () => {
	const { currentInput, searchNode } = useSearch();
	const { searchData } = useSearchApi();
	const { position, searchBox } = useParameters();

	const x = position.x - 100;
	const y = position.y - 40;

	if (!searchBox) return <></>

	return (
		<div className="search-box" style={{left: x, top: y}}>
			<label className="node-label" htmlFor="search-box">
				Enter a keyword...
			</label>
			<NodesInputs currentInput={currentInput}/>
			<NodesList 
				nodesList={searchData.nodes} 
				searchNode={searchNode}
			/>
		</div>
	)
}

Search.displayName="Search";