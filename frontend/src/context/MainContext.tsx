import { createContext, useState, useContext } from 'react';

interface positionType {
	x: number, 
	y: number
}

interface searchBoxType {
	(e: React.MouseEvent<HTMLDivElement>): void;
}

const PositionContext: React.Context<any> = createContext(null)

export const usePosition = () => {
	return (
		useContext(PositionContext)
	)
}

export const PositionProvider = ({children}: any) => {
	const [position, positionSet] = useState<positionType>({x: 0, y: 0});
	const [searchBox, searchBoxSet] = useState<boolean>(false);
	const [nodesAdded, nodesAddedSet] = useState<string[]>([]);
	const [currentInput, currentInputSet] = useState<string>('');

	const activeSearchBox: searchBoxType = (e) => {
		searchBoxSet(true);
		positionSet({x: e.clientX, y: e.clientY})
	}

	const deActivateSearchBox: searchBoxType = (e) => {
		searchBoxSet(false);
		currentInputSet('');
	}

	return (
		<PositionContext.Provider value={{
			deActivateSearchBox, 
			activeSearchBox, 
			searchBox, 
			nodesAdded, 
			nodesAddedSet, 
			position, 
			currentInput, 
			currentInputSet
		}}>
			{children}
		</PositionContext.Provider>
	)

}