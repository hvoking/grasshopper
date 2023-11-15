// App imports
import { useSearch } from '../../../../main/context/search';
import './styles.scss';

export const SubToolsList = () => {
	const { searchGeometry, allItems } = useSearch();

	return (
 		<div className="subtools-list">
			{allItems.map((item: any, index: number) => {
				return (
					<div
						key={index} 
						className="geometries" 
						data-item={item} 
						onClick={searchGeometry} 
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