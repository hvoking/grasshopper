// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useFilters } from '../../filters';

const SearchApiContext: React.Context<any> = createContext(null)

export const useSearchApi = () => {
	return (
		useContext(SearchApiContext)
	)
}

export const SearchApiProvider = ({children}: any) => {
	const { currentInput } = useFilters();
	const [ searchData, setSearchData ] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			const tempUrl = `
				${process.env.REACT_APP_API_URL}/
				search
				?currentNode=${currentInput}
			`
			const url = tempUrl.replace(/\s/g, '');
			const res = await fetch(url);
			const receivedData = await res.json();
			setSearchData(receivedData);
		}
		if (currentInput.length > 0) {
			fetchData()
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