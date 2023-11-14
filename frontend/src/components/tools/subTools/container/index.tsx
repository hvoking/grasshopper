const files = ['Hello', 'this', 'are', 'the', 'folders', 'yey']

export const SubToolsContainer = () => {
	return (
		<div className="subToolsContainer">
			{
				files.map((file: string, index: number) => {
					return (
						<div key={index}>
							{file.charAt(0)}
						</div>
					)
				})
			}
		</div>
	)
}

SubToolsContainer.displayName="SubToolsContainer";