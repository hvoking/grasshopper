// React imports
import { useState, useContext, createContext } from 'react';

// Third-party imports
import * as THREE from 'three';

const SceneContext: React.Context<any> = createContext(null)

export const useScene = () => {
	return (
		useContext(SceneContext)
	)
}

export const SceneProvider = ({children}: any) => {
	const [ scene, setScene ] = useState<any>(new THREE.Scene());
	const light = new THREE.HemisphereLight('rgba(211, 211, 255)', 'darkslategrey', 5)
	scene.add(light);

	return (
		<SceneContext.Provider value={{ scene }}>
			{children}
		</SceneContext.Provider>
	)
}

SceneContext.displayName = "SceneContext";