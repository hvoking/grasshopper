// React imports
import { useState, useContext, createContext } from 'react';

// Third-party imports
import { Scene } from 'three';

interface positionType { x: number, y: number };
interface searchBoxType {(e: React.MouseEvent<HTMLDivElement>): void};

const ParametersContext: React.Context<any> = createContext(null);

export const useParameters = () => {
	return (
		useContext(ParametersContext)
	)
}

export const ParametersProvider = ({children}: any) => {
	const [ geometry, setGeometry ] = useState<any>(null);
	const [ position, setPosition ] = useState<positionType>({x: 0, y: 0});
	const [ searchBox, setSearchBox ] = useState<boolean>(false);
	const [ nodesAdded, setNodesAdded ] = useState<string[]>([]);
	const [ currentInput, setCurrentInput ] = useState<string>('');
	const [ scene, setScene ] = useState<Scene>(new Scene());
	const [ delay, setDelay ] = useState<any>(null);
	const [ currentFile, setCurrentFile ] = useState<any>(null);

	const activeSearchBox: searchBoxType = (e) => {
		setSearchBox(true);
		setPosition({x: e.clientX, y: e.clientY})
	};

	const deActivateSearchBox: searchBoxType = (e) => {
		setSearchBox(false);
		setCurrentInput('');
	};

	return (
		<ParametersContext.Provider value={{ 
			activeSearchBox, deActivateSearchBox, 
			nodesAdded, setNodesAdded, 
			currentInput, setCurrentInput,
			searchBox, position, scene,
			delay, setDelay,
			currentFile, setCurrentFile,
		}}>
			{children}
		</ParametersContext.Provider>
	)
}

ParametersContext.displayName = "ParametersContext";