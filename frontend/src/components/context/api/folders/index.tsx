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
		const fetchData = async () => {
			const tempUrl = `
				${process.env.REACT_APP_API_URL}/
				folders/
			`
			const url = tempUrl.replace(/\s/g, '');
			const res = await fetch(url);
			const receivedData = await res.json();
			setListOfTools(receivedData);
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