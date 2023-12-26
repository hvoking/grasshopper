// App imports
import './styles.scss';

// Context imports
import { useParameters } from '../../../../context/parameters';
import { useFilesApi } from '../../../../context/api/files';

export const SubToolsList = () => {
	const { setNodeName } = useParameters();
	const { filesData } = useFilesApi();

	const onClick = (e: any) => {
		e.preventDefault();
		const nodeName = e.target.dataset.item;
		setNodeName(nodeName);
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