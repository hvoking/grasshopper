// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useParameters } from '../../parameters';

const FilesApiContext: React.Context<any> = createContext(null)

export const useFilesApi = () => {
	return (
		useContext(FilesApiContext)
	)
}

export const FilesApiProvider = ({children}: any) => {
	const { setAllItems, currentFile } = useParameters();

	useEffect(() => {
		const fetchData = async () => {
			const tempUrl = `
				${process.env.REACT_APP_API_URL}/
				files
				?file=${currentFile}
			`
			const url = tempUrl.replace(/\s/g, '');
			const res = await fetch(url);
			const receivedData = await res.json();
			setAllItems(receivedData);
		}
		currentFile && fetchData();
	}, [ currentFile ])

	return (
		<FilesApiContext.Provider value={{ }}>
			{children}
		</FilesApiContext.Provider>
	)
}

FilesApiContext.displayName = "FilesApiContext";