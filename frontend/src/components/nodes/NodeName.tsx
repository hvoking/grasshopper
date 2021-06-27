const NodeName = ({nodeItem}: any) => {
	return (
		<div className="nodeName">
			<div className="nodeNameText">{nodeItem.node && nodeItem.node}</div>
		</div>
	)
}

export default NodeName;