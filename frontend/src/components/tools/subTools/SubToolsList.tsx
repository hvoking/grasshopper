import { useSearch } from '../../main/context/SearchContext'

export const SubToolsList = () => {
	const {searchGeometry, allItems} = useSearch()
	return (
 		<div className="subToolsList">
			{allItems.map((item: any, index: number) => {
				return (
					<div 
						className="geometries" 
						data-item={item} 
						onClick={searchGeometry} 
						key={index}>
						<div className="hexagon"></div>
						{item}
					</div>
				)
			})}
		</div>
	)
}

SubToolsList.displayName="SubToolsList"