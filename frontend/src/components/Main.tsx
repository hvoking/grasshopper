import { useState } from 'react';
import Node from './nodes/Node';
import Spline from './nodes/Spline';

import SearchBar from './searchBar/SearchBar';

const Main = () => {
	const [searchBox, searchBoxSet] = useState(false);
	const [positionX, positionXSet] = useState(0);
	const [positionY, positionYSet] = useState(0);
	const [nodesAdded, nodesAddedSet] = useState<any>([]);
	const [currentInput, currentInputSet] = useState('');
	const onDoubleClick = (e: any) => {
		searchBoxSet(true);
		positionXSet(e.clientX)
		positionYSet(e.clientY)
	}

	const onClick = (e: any) => {
		searchBoxSet(false);
		currentInputSet('');
	}
	return (
		<div onClick={onClick} onDoubleClick={onDoubleClick} className="main">
			<div>
			{searchBox && 
				<SearchBar 
					positionX={positionX} 
					positionY={positionY} 
					nodesAdded={nodesAdded}
					nodesAddedSet={nodesAddedSet}
					currentInputSet={currentInputSet}
					currentInput={currentInput}
					/>
			}
			</div>
			{nodesAdded.map((item: any, index: number) => {
				return (
					<Node key={index} nodeItem={item} />
				)
			})}
			<Spline />
		</div>
	)
}

export default Main;
