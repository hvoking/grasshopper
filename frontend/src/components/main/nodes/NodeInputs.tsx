export const NodeInputs = ({nodeItem}: any) => {
	return (
		<div className="nodeInputs">
			{nodeItem.inputs && nodeItem.inputs.map((item: any, index: number) => {
				return (
					<div key={index} className="inputItem">
						<span className="before"></span>{item}
					</div>
				)
			})}
		</div>
	)
}

NodeInputs.displayName="NodeInputs";