// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const FoldersApiContext: React.Context<any> = createContext(null)

export const useFoldersApi = () => {
	return (
		useContext(FoldersApiContext)
	)
}

export const FoldersApiProvider = ({children}: any) => {
	const [ listOfTools, setListOfTools ] = useState<string[]>([]);

	useEffect(() => {
		const fetchData = () => {
			fetch('http://localhost:8000/folders/')
			.then(res => res.json())
			.then(data => {setListOfTools(data.folders)})
		}
		fetchData();
	}, []);

	return (
		<FoldersApiContext.Provider value={{ listOfTools }}>
			{children}
		</FoldersApiContext.Provider>
	)
}

FoldersApiContext.displayName = "FoldersApiContext";