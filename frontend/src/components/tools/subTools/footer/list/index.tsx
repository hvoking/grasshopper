// App imports
import { useSearch } from '../../../../context/search';
import { useParameters } from '../../../../context/parameters';
import './styles.scss';

export const SubToolsList = () => {
	const { allItems } = useParameters();
	const { searchGeometry } = useSearch();

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