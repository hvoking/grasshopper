// App imports
import './styles.scss';

// Context imports
import { useSearch } from '../context/SearchContext';

export const SearchBar = () => {
	const {style, searchList, currentInput, nodesList, searchNode} = useSearch()
	
	return (
		<div style={style} className="searchBox">
			<label className="nodeLabel" htmlFor="searchBox">Enter a keyword...</label>
			<input 
				onChange={searchList}
				className="inputNode" 
				id="searchBox" 
				type="text" 
				placeholder="Search" 
				autoFocus
				value={currentInput}
				/>
			{nodesList.nodes && nodesList.nodes.map((node: any, index: number) => {
				return (
					<div className="nodeItem" onClick={searchNode} key={index}>{node}</div>
				)
			})}
		</div>
	)
}

SearchBar.displayName="SearchBar"