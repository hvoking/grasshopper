export const NodesList = ({ nodesList, searchNode }: any) => {
	if (!nodesList) return <></>
	return (
		<>
			{nodesList.map((node: any, index: number) => {
				return (
					<div 
						key={index} 
						className="node-item" 
						onClick={searchNode}
					>
						{node}
					</div>
				)
			})}
		</>
	)
}