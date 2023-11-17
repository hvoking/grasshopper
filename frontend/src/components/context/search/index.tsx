// React imports
import { useState, useContext, createContext } from 'react';

// Context imports
import { useParameters } from '../parameters';
import { useGeometriesApi } from '../api/geometries';

// Third-party imports
import * as THREE from 'three';

const SearchContext: React.Context<any> = createContext(null);

export const useSearch = () => {
	return (
		useContext(SearchContext)
	)
}

export const SearchProvider = ({children}: any) => {
	const { nodesAdded, setNodesAdded, setCurrentInput } = useParameters();
	const [ currentGeometry, setCurrentGeometry ] = useState<any>(null);

	const { geometriesData } = useGeometriesApi();

	const createNode = (name: string) => {
		const threeDefinition = THREE
		const geo = eval(`new threeDefinition.${name}()`)
		setCurrentGeometry(geo)
	}
	const searchNode = (e: any) => {
		e.preventDefault();
		const nodeName = e.currentTarget.innerHTML
		let name = 'nodes'
		if (geometriesData.includes(nodeName)) {
			name = 'geometries'
		}
		fetch(`http://localhost:8000/${name}-detail/${nodeName}`)
		.then(res => res.json())
		.then(data => {
			setNodesAdded([...nodesAdded, data]);
			createNode(nodeName)
		})
		.catch(error => console.log(error))
	}

	const searchGeometry = (e: any) => {
		e.preventDefault();
		const geometryName = e.currentTarget.dataset.item
		let name = 'nodes'
		if (geometriesData.includes(geometryName)) {
			name = 'geometries'
		}
		fetch(`http://localhost:8000/${name}-detail/${geometryName}`)
		.then(res => res.json())
		.then(data => {
			setNodesAdded([...nodesAdded, data]);
			createNode(geometryName)
			})
		.catch(error => console.log(error))
	}

	return (
		<SearchContext.Provider value={{
			searchNode, 
			searchGeometry, currentGeometry
		}}>
			{children}
		</SearchContext.Provider>
	)
}

SearchContext.displayName = "SearchContext";