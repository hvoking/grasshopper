export const NodesInputs = ({ searchList, currentInput }: any) => {
	return (
		<input 
			id="search-box"
			className="input-node"
			type="text"
			onChange={searchList}
			placeholder="Search"
			autoFocus
			value={currentInput}
		/>
	)
}

NodesInputs.displayName="NodesInputs";