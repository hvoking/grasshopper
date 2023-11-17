// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const GeometriesApiContext: React.Context<any> = createContext(null)

export const useGeometriesApi = () => {
	return (
		useContext(GeometriesApiContext)
	)
}

export const GeometriesApiProvider = ({children}: any) => {
	const [ geometriesData, setGeometriesData ] = useState<any>(null);

	useEffect(() => {
		const fetchData = () => {
			fetch('http://localhost:8000/geometries/')
			.then(res => res.json())
			.then(data => {
				setGeometriesData(data.geometries)
			})
			.catch(error => console.log(error))
		}
		fetchData()
	}, []);

	return (
		<GeometriesApiContext.Provider value={{ geometriesData }}>
			{children}
		</GeometriesApiContext.Provider>
	)
}

GeometriesApiContext.displayName = "GeometriesApiContext";