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
		const fetchData = async () => {
			const tempUrl = `
				${process.env.REACT_APP_API_URL}/
				folders/
				geometries
			`
			const url = tempUrl.replace(/\s/g, '');
			const res = await fetch(url);
			const receivedData = await res.json();
			setGeometriesData(receivedData);
		}
		fetchData();
	}, []);

	return (
		<GeometriesApiContext.Provider value={{ geometriesData }}>
			{children}
		</GeometriesApiContext.Provider>
	)
}

GeometriesApiContext.displayName = "GeometriesApiContext";