import { usePosition } from '../context/Context';
import Node from './nodes/Node';
import SearchBar from './searchBar/SearchBar';

const Main = () => {
	const { onClick, onDoubleClick, searchBox, nodesAdded } = usePosition()
	return (
		<div onClick={onClick} onDoubleClick={onDoubleClick} className="main">
			{searchBox && <SearchBar />}
			{nodesAdded.map((item: any, index: number) => {
				return (
					<Node key={index} nodeItem={item} />
				)
			})}
		</div>
	)
}

export default Main;
