// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useParameters } from '../../parameters';

// Third-party imports
import * as THREE from 'three';

const DetailApiContext: React.Context<any> = createContext(null)

export const useDetailApi = () => {
	return (
		useContext(DetailApiContext)
	)
}

export const DetailApiProvider = ({children}: any) => {
	const { nodesAdded, setNodesAdded, currentNodeName, currentName, setCurrentGeometry  } = useParameters();
	const [ detailData, setDetailData ] = useState<any>(null);

	const createNode = () => {
		const threeDefinition = THREE
		const geo = eval(`new threeDefinition.${currentNodeName}()`)
		setCurrentGeometry(geo)
	}

	useEffect(() => {
		const fetchData = async () => {
			const tempUrl = `
				${process.env.REACT_APP_API_URL}/
				${currentName}-detail
				?node=${currentNodeName}
			`
			const url = tempUrl.replace(/\s/g, '');
			const res = await fetch(url);
			const receivedData = await res.json();
			setDetailData(receivedData)
			setNodesAdded([...nodesAdded, receivedData]);
			createNode()
		}
		fetchData()
	}, [ currentNodeName, currentName ])

	return (
		<DetailApiContext.Provider value={{ detailData }}>
			{children}
		</DetailApiContext.Provider>
	)
}

DetailApiContext.displayName = "DetailApiContext";