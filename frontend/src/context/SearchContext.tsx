import { useState, useEffect, useContext, createContext } from 'react';
import { usePosition } from './MainContext';
import * as THREE from 'three';

const SearchContext: React.Context<any> = createContext(null);

export const useSearch = () => {
	return (
		useContext(SearchContext)
	)
}

export const SearchProvider = ({children}: any) => {
	const {position, nodesAdded, nodesAddedSet, currentInputSet, currentInput} = usePosition()
	const [nodesList, nodesListSet] = useState<string[]>([]);
	const [geometryItems, geometryItemsSet] = useState<string[]>([])
	const [allItems, allItemsSet] = useState<any>([])
	const [currentGeometry, currentGeometrySet] = useState<any>(null)

	useEffect(() => {
		const geometries = () => {
			fetch('http://localhost:8000/geometries/')
			.then(res => res.json())
			.then(data => {
				geometryItemsSet(data.geometries)
			})
			.catch(error => console.log(error))
		}
		geometries()
	}, [])

	const style = {
		left: position.x - 100, 
		top: position.y - 40
	}

	const searchList: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
		const input = e.currentTarget.value
		currentInputSet(input);
		if (input.length > 0) {
			fetch(`http://localhost:8000/nodes-list/${input}`)
			.then(res => res.json())
			.then(data => {
				nodesListSet(data);
			})
			.catch(error => console.log(error))
		}
		else {
			nodesListSet([]);
		}
	}
	const createNode = (name: string) => {
		const threeDefinition = THREE
		const geo = eval(`new threeDefinition.${name}()`)
		currentGeometrySet(geo) 
		console.log(geo)
	}
	const searchNode = (e: any) => {
		e.preventDefault();
		const nodeName = e.currentTarget.innerHTML
		let name = 'nodes'
		if (geometryItems.includes(nodeName)) {
			name = 'geometries'
		}
		fetch(`http://localhost:8000/${name}-detail/${nodeName}`)
		.then(res => res.json())
		.then(data => {
			nodesAddedSet([...nodesAdded, data]);
			createNode(nodeName)
			})
		.catch(error => console.log(error))
	}

	const searchGeometry = (e: any) => {
		e.preventDefault();
		const geometryName = e.currentTarget.dataset.item
		let name = 'nodes'
		if (geometryItems.includes(geometryName)) {
			name = 'geometries'
		}
		fetch(`http://localhost:8000/${name}-detail/${geometryName}`)
		.then(res => res.json())
		.then(data => {
			nodesAddedSet([...nodesAdded, data]);
			createNode(geometryName)
			})
		.catch(error => console.log(error))
	}

	return (
		<SearchContext.Provider value={{
			style, 
			searchList, 
			currentInput, 
			nodesList, 
			searchNode, 
			searchGeometry, 
			geometryItems,
			allItems, 
			allItemsSet,
			currentGeometry
		}}>
			{children}
		</SearchContext.Provider>
	)
}

SearchContext.displayName = "SearchContext";