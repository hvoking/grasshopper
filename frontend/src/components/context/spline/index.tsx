// React imports
import { createContext, useState, useContext } from 'react';

const SplineContext: React.Context<any> = createContext(null)

export const useSpline = () => {
	return (
		useContext(SplineContext)
	)
}

export const SplineProvider = ({children}: any) => {
	const [ splineStartPosition, setSplineStartPosition ] = useState({x: 0, y: 0});
	const [ splineEndPosition, setSplineEndPosition ] = useState({x: 0, y: 0});
	const [ activeSpline, setActiveSpline ] = useState(false);
	const [ transmitting, setTransmitting ] = useState(false);
	
	const activateSpline = () => { setActiveSpline(true) };
	const startTransmitting: () => void = () => { setTransmitting(prev => !prev) };
	
	return (
		<SplineContext.Provider 
			value={{
				splineStartPosition, setSplineStartPosition, 
				splineEndPosition, setSplineEndPosition,
				startTransmitting, transmitting,
				activeSpline, setActiveSpline,
				activateSpline,
			}}
		>
			{children}
		</SplineContext.Provider>
	)
}

SplineContext.displayName = "SplineContext";