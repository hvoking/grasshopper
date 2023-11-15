// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useSearch } from '../../search';
import { useParameters } from '../../parameters';

const FilesApiContext: React.Context<any> = createContext(null)

export const useFilesApi = () => {
	return (
		useContext(FilesApiContext)
	)
}

export const FilesApiProvider = ({children}: any) => {
	const { setAllItems } = useSearch();
	const { currentFile } = useParameters();
	
	useEffect(() => {
		const fetchFolder = () => {
			fetch(`http://localhost:8000/folders/${currentFile}`)
			.then(res => res.json())
			.then(data => {
				setAllItems(data[currentFile]);
			})
		}
		currentFile && fetchFolder();
	}, [currentFile])

	return (
		<FilesApiContext.Provider value={{ }}>
			{children}
		</FilesApiContext.Provider>
	)
}

FilesApiContext.displayName = "FilesApiContext";