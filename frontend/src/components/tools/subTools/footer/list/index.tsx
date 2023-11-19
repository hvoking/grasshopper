// App imports
import './styles.scss';

// Context imports
import { useParameters } from '../../../../context/parameters';
import { useGeometriesApi } from '../../../../context/api/geometries';
import { useFilesApi } from '../../../../context/api/files';

export const SubToolsList = () => {
	const { setCurrentName, setCurrentNodeName } = useParameters();
	const { geometriesData } = useGeometriesApi();
	const { filesData } = useFilesApi();

	const onClick = (e: any) => {
		e.preventDefault();
		const nodeName = e.target.dataset.item;
		let name = 'nodes';
		if (geometriesData.includes(nodeName)) {
			name = 'geometries';
		}
		setCurrentNodeName(nodeName);
		setCurrentName(name);
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