// App imports
import './styles.scss';

// Context imports
import { useFilters } from '../../../../context/filters';
import { useFilesApi } from '../../../../context/api/files';
import { useGeometriesApi } from '../../../../context/api/geometries';

export const SubToolsList = () => {
	const { setNodeName, setTypeName } = useFilters();
	const { filesData } = useFilesApi();
	const { geometriesData } = useGeometriesApi();

	const onClick = (e: any) => {
		e.preventDefault();
		const nodeName = e.target.dataset.item;
		let typeName = 'nodes';
		if (geometriesData.includes(nodeName)) {
			typeName = 'geometries';
		}
		setNodeName(nodeName);
		setTypeName(typeName);
	}

	return (
 		<div className="subtools-list">
			{filesData && filesData.map((item: any, index: number) => {
				return (
					<div
						key={index} 
						className="geometries" 
						data-item={item} 
						onClick={onClick} 
					>
						<div className="hexagon"></div>
						{item}
					</div>
				)
			})}
		</div>
	)
}

SubToolsList.displayName="SubToolsList"