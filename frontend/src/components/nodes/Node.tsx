import Draggable from 'react-draggable';

const Node = ({nodeItem}: {nodeItem: any}) => {
	return (
		<Draggable>
			<div style={{visibility: nodeItem.node ? "visible" : "hidden"}} className="node">
				<div className="nodeInputs">
					{nodeItem.nodes && nodeItem.nodes.map((item: any, index: number) => {
						return (
							<div key={index} className="inputItem">
								{item}
							</div>
						)
					})}
				</div>
				<div className="nodeName">
					<div className="nodeNameText">{nodeItem.node && nodeItem.node}</div>
				</div>
				<div className="nodeOutputs">
					<div className="outputItem">{nodeItem.node && nodeItem.node[0]}</div>
				</div>
				
			</div>
		</Draggable>
	)
}

export default Node;