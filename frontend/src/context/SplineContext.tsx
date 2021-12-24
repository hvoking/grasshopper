import { createContext, useState, useContext } from 'react';

const SplinePositionContext: React.Context<any> = createContext(null)

export const useSplinePosition = () => {
	return (
		useContext(SplinePositionContext)
	)
}

export interface splinePositionType {
	x: number;
	y: number;
}

export const SplinePositionProvider = ({children}: any) => {
	const [splineStartPosition, splineStartPositionSet] = useState<splinePositionType>({x: 0, y: 0});
	const [splineEndPosition, splineEndPositionSet] = useState<splinePositionType>({x: 0, y: 0});
	const [activeSpline, activeSplineSet] = useState<boolean>(false);
	const [transmitting, transmittingSet] = useState<boolean>(false);
	const activateSpline = () => {
		activeSplineSet(true);
	}
	const startTransmitting: () => void = () => {
		transmittingSet(prev => !prev);
	}
	return (
		<SplinePositionContext.Provider 
			value={{
				splineStartPosition, 
				splineStartPositionSet, 
				activeSpline,
				activateSpline,
				splineEndPosition, 
				splineEndPositionSet,
				startTransmitting,
				transmitting,
				activeSplineSet
			}}>
			{children}
		</SplinePositionContext.Provider>
	)

}

SplinePositionContext.displayName = "SplinePositionContext";
