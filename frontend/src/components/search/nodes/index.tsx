// Context imports
import { useSearchApi } from '../../context/api/search';
import { useGeometriesApi } from '../../context/api/geometries';
import { useParameters } from '../../context/parameters';
import './styles.scss';

export const NodesList = () => {
	const { searchData } = useSearchApi();
	const { setCurrentName, setCurrentNodeName } = useParameters();
	const { geometriesData } = useGeometriesApi();

	const onClick = (e: any) => {
		e.preventDefault();
		const nodeName = e.currentTarget.innerHTML
		let name = 'nodes'
		if (geometriesData.includes(nodeName)) {
			name = 'geometries'
		}
		setCurrentNodeName(nodeName);
		setCurrentName(name)
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