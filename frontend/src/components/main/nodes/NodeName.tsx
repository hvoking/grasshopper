import { useState } from 'react';

let timer: any = null;
const NodeName = ({nodeItem}: any) => {
	const [information, informationSet] = useState(false)
	const onMouseEnter = () => {
		timer = setTimeout(() => informationSet(true), 500)
	}
	const onMouseLeave = () => {
		clearTimeout(timer);
		informationSet(false);
	}
	return (
		<div className="nodeName" onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
			<div className="nodeNameText">{nodeItem.output && nodeItem.output}</div>
			{information && 
				<div className="nodeInformation" style={{}}>
					<div className="title">
						<div className="hexagon"></div>
						<div>{nodeItem.output && nodeItem.output}</div>
					</div>
					<div className="info">
						<div>
						{nodeItem.output && nodeItem.output}
						</div>
					</div>
					<div className="description">
						<div className="descriptionText">
							{nodeItem.output && nodeItem.output}
						</div>
					</div>
				</div>
			} </div>
	)
}

NodeName.displayName="NodeName";
export default NodeName;