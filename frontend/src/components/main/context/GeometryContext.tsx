import { useState, useContext, createContext } from 'react';

const GeometryContext: React.Context<any> = createContext(null)

export const useGeometry = () => {
	return (
		useContext(GeometryContext)
	)
}

export const GeometryProvider = ({children}: any) => {
	const [Geometry, GeometrySet] = useState<any>(null)
}

GeometryContext.displayName = "GeometryContext";