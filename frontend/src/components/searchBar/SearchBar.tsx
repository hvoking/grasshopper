import { useState } from 'react';
import { usePosition } from '../../context/Context';

const SearchBar = () => {
	const {position, nodesAdded, nodesAddedSet, currentInputSet, currentInput} = usePosition()
	const [nodesList, nodesListSet] = useState<any>([]);
	const style = {
		left: position.x - 100, 
		top: position.y - 40
	}
	const onChange = (e: any) => {
		 currentInputSet(e.currentTarget.value);
		 // this part is the part that will make the app slow
		 fetch(`http://localhost:8000/nodes/nodes-list/${e.currentTarget.value}`)
		 .then(res => res.json())
		 .then(data => {
		 	nodesListSet(data);
		 	})
		 .catch(error => console.log(error))
	}
	const searchNode = (e: any) => {
		e.preventDefault();
		const nodeName = e.currentTarget.innerHTML
		fetch(`http://localhost:8000/nodes/nodes-detail/${nodeName}`)
		.then(res => res.json())
		.then(data => {
			nodesAddedSet([...nodesAdded, data]);
			})
		.catch(error => console.log(error))
	}
	return (
		<div style={style} className="searchBox">
			<label className="nodeLabel" htmlFor="searchBox">Enter a keyword...</label>
			<input 
				onChange={onChange}
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

export default SearchBar;