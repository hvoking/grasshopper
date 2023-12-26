// Context imports
import { useSearchApi } from '../../../context/api/search';
import { useFilesApi } from '../../../context/api/files';
import { useFilters } from '../../../context/filters';
import './styles.scss';

export const NodesList = () => {
	const { searchData } = useSearchApi();
	const { setNodeName, setTypeName } = useFilters();

	const onClick = (e: any) => {
		e.preventDefault();
		const nodeName = e.currentTarget.innerHTML;
		let typeName = 'nodes'
		if (nodeName.includes("Geometry")) {
			typeName = 'geometries'
		}
		setNodeName(nodeName);
		setTypeName(typeName)
	}

	if (!searchData) return <></>
		
	return (
		<>
			{searchData.map((node: any, index: number) => {
				return (
					<div 
						key={index} 
						className="node-item" 
						onClick={onClick}
					>
						{node}
					</div>
				)
			})}
		</>
	)
}