// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useFilters } from '../../filters';

// Third-party imports
import * as THREE from 'three';

const NodesApiContext: React.Context<any> = createContext(null)

export const useNodesApi = () => {
	return (
		useContext(NodesApiContext)
	)
}

export const NodesApiProvider = ({children}: any) => {
	const { nodesAdded, setNodesAdded, nodeName, typeName, setCurrentGeometry } = useFilters();
	const [ nodesData, setNodesData ] = useState<any>(null);

	const createNode = () => {
		const threeDefinition = THREE;
		const geo = eval(`new threeDefinition.${nodeName}()`);
		typeName === "geometries" && setCurrentGeometry(geo);
	}

	useEffect(() => {
		const fetchData = async () => {
			const tempUrl = `
				${process.env.REACT_APP_API_URL}/
				nodes
				?nodeName=${nodeName}
				&folderName=${typeName}				
			`
			const url = tempUrl.replace(/\s/g, '');
			const res = await fetch(url);
			const receivedData = await res.json();
			setNodesData(receivedData)
			setNodesAdded([...nodesAdded, receivedData]);
			createNode()
		}
		nodeName && fetchData();
	}, [ nodeName ])

	return (
		<NodesApiContext.Provider value={{ nodesData }}>
			{children}
		</NodesApiContext.Provider>
	)
}

NodesApiContext.displayName = "NodesApiContext";