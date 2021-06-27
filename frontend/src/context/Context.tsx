import { createContext, useState, useContext } from 'react';

const PositionContext: React.Context<any> = createContext(null)
const SplinePositionContext: React.Context<any> = createContext(null)

export const usePosition = () => {
	return (
		useContext(PositionContext)
	)
}

export const useSplinePosition = () => {
	return (
		useContext(SplinePositionContext)
	)
}

export const PositionProvider = ({children}: any) => {
	const [position, positionSet] = useState<{x: number, y: number}>({x: 0, y: 0});
	const [searchBox, searchBoxSet] = useState(false);
	const [nodesAdded, nodesAddedSet] = useState<any>([]);
	const [currentInput, currentInputSet] = useState('');

	const onDoubleClick = (e: any) => {
		searchBoxSet(true);
		positionSet({x: e.clientX, y: e.clientY})
	}

	const onClick = (e: any) => {
		searchBoxSet(false);
		currentInputSet('');
	}

	return (
		<PositionContext.Provider value={{onClick, onDoubleClick, searchBox, nodesAdded, nodesAddedSet, position, currentInput, currentInputSet}}>
			{children}
		</PositionContext.Provider>
	)

}

export const SplinePositionProvider = ({children}: any) => {
	const [splinePosition, splinePositionSet] = useState<any>({x: 100, y: 100});

	const startSpline = (e: any) => {
		e.preventDefault();
		splinePositionSet({x: e.clientX, y: e.clientY})
	}

	return (
		<SplinePositionContext.Provider value={{splinePosition, splinePositionSet, startSpline}}>
			{children}
		</SplinePositionContext.Provider>
	)

}


