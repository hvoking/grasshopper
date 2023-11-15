// React imports
import { useState, useContext, createContext } from 'react';

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
	const { currentFile, delay, setDelay } = useParameters();
	
	const [ subToolsList, setSubToolsList ] = useState<boolean>(false);
	
	const onMouseEnter = () => {
		fetchFolder();
		setDelay(setTimeout(() => setSubToolsList(true), 200))
	}

	const onMouseLeave = () => {
		clearTimeout(delay);
		setSubToolsList(false);
	}

	const fetchFolder = () => {
		fetch(`http://localhost:8000/folders/${currentFile}`)
		.then(res => res.json())
		.then(data => {
			setAllItems(data[currentFile]);
		})
	}

	return (
		<FilesApiContext.Provider value={{ subToolsList, onMouseEnter, onMouseLeave }}>
			{children}
		</FilesApiContext.Provider>
	)
}

FilesApiContext.displayName = "FilesApiContext";