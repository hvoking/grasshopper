// App imports
import './styles.scss';

// Context imports
import { useParameters } from '../../context/parameters';

export const NodesInputs = () => {
	const { currentInput, setCurrentInput } = useParameters();

	const onChange: (e: any) => void = (e) => {
		const input = e.currentTarget.value
		setCurrentInput(input);
	}

	return (
		<>
			<label 
				className="node-label" 
				htmlFor="search-box"
			>
				Enter a keyword...
			</label>
			<input 
				id="search-box"
				className="input-node"
				type="text"
				onChange={onChange}
				placeholder="Search"
				autoFocus
				value={currentInput}
			/>
		</>
	)
}

NodesInputs.displayName="NodesInputs";