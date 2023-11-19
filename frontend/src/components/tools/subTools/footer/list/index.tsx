// App imports
import './styles.scss';

// Context imports
import { useParameters } from '../../../../context/parameters';
import { useGeometriesApi } from '../../../../context/api/geometries';

export const SubToolsList = () => {
	const { allItems, setCurrentName, setCurrentNodeName } = useParameters();
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

	return (
 		<div className="subtools-list">
			{allItems.length > 0 && allItems.map((item: any, index: number) => {
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