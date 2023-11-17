// Context imports
import { useSearch } from '../../../context/search';
import { useSearchApi } from '../../../context/api/search';

export const NodesList = () => {
	const { searchNode } = useSearch();
	const { searchData } = useSearchApi();

	const nodesList = searchData.nodes;

	if (!nodesList) return <></>
		
	return (
		<>
			{nodesList.map((node: any, index: number) => {
				return (
					<div 
						key={index} 
						className="node-item" 
						onClick={searchNode}
					>
						{node}
					</div>
				)
			})}
		</>
	)
}