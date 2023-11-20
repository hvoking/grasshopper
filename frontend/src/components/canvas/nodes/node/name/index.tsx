// React imports
import { useState } from 'react';
import './styles.scss';

let timer: any = null;

export const Name = ({nodeItem}: any) => {
	const [information, informationSet] = useState(false);

	const onMouseEnter = () => {
		timer = setTimeout(() => informationSet(true), 500)
	}

	const onMouseLeave = () => {
		clearTimeout(timer);
		informationSet(false);
	}

	return (
		<div className="node-name" onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
			<div className="node-name-text">
				{nodeItem.output && nodeItem.output}
			</div>
			{information && 
				<div className="node-information" style={{}}>
					<div className="node-title">
						<div className="hexagon"></div>
						<div>{nodeItem.output && nodeItem.output}</div>
					</div>
					<div className="info">
						<div>
						{nodeItem.output && nodeItem.output}
						</div>
					</div>
					<div className="description">
						<div className="description-text">
							{nodeItem.output && nodeItem.output}
						</div>
					</div>
				</div>
			} </div>
	)
}

Name.displayName="Name";