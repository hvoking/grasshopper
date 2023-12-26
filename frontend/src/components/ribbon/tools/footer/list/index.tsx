// App imports
import './styles.scss';

// Context imports
import { useFilters } from '../../../../context/filters';
import { useFilesApi } from '../../../../context/api/files';

export const SubToolsList = () => {
	const { setNodeName, setTypeName } = useFilters();
	const { filesData } = useFilesApi();

	const onClick = (e: any) => {
		e.preventDefault();
		const currentNodeName = e.target.dataset.item;
		setNodeName(currentNodeName);
		
		currentNodeName.includes("Geometry") ? 
		setTypeName("geometries") : 
		currentNodeName.includes("Material") ?
		setTypeName("materials") : 
		setTypeName(null);
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