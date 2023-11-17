// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useParameters } from '../../parameters';

const SearchApiContext: React.Context<any> = createContext(null)

export const useSearchApi = () => {
	return (
		useContext(SearchApiContext)
	)
}

export const SearchApiProvider = ({children}: any) => {
	const { currentInput } = useParameters();
	const [ searchData, setSearchData ] = useState<any>(null);

	useEffect(() => {
		if (currentInput.length > 0) {
			fetch(`http://localhost:8000/nodes-list/${currentInput}`)
			.then(res => res.json())
			.then(data => {
				setSearchData(data);
			})
			.catch(error => console.log(error))
		}
		else {
			setSearchData([]);
		}
	}, [ currentInput ])

	return (
		<SearchApiContext.Provider value={{ searchData }}>
			{children}
		</SearchApiContext.Provider>
	)
}

SearchApiContext.displayName = "SearchApiContext";