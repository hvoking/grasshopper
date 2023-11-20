// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useParameters } from '../../parameters';

// Third-party imports
import * as THREE from 'three';

const NodesApiContext: React.Context<any> = createContext(null)

export const useNodesApi = () => {
	return (
		useContext(NodesApiContext)
	)
}

export const NodesApiProvider = ({children}: any) => {
	const { nodesAdded, setNodesAdded, currentNodeName, currentName, setCurrentGeometry  } = useParameters();
	const [ nodesData, setNodesData ] = useState<any>(null);

	const createNode = () => {
		const threeDefinition = THREE
		const geo = eval(`new threeDefinition.${currentNodeName}()`)
		setCurrentGeometry(geo)
	}

	useEffect(() => {
		const fetchData = async () => {
			const tempUrl = `
				${process.env.REACT_APP_API_URL}/
				nodes_api
				?node_name=${currentNodeName}
				&type_name=${currentName}				
			`
			const url = tempUrl.replace(/\s/g, '');
			const res = await fetch(url);
			const receivedData = await res.json();
			setNodesData(receivedData)
			setNodesAdded([...nodesAdded, receivedData]);
			createNode()
		}
		currentNodeName && fetchData()
	}, [ currentNodeName, currentName ])

	return (
		<NodesApiContext.Provider value={{ nodesData }}>
			{children}
		</NodesApiContext.Provider>
	)
}

NodesApiContext.displayName = "NodesApiContext";