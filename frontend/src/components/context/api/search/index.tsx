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
		const fetchData = async () => {
			const tempUrl = `
				${process.env.REACT_APP_API_URL}/
				search_api
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