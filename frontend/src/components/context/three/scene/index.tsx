// React imports
import { useState, useContext, createContext } from 'react';

// Third-party imports
import { Scene } from 'three';

const SceneContext: React.Context<any> = createContext(null)

export const useScene = () => {
	return (
		useContext(SceneContext)
	)
}

export const SceneProvider = ({children}: any) => {
	const [ scene, setScene ] = useState<Scene>(new Scene());

	return (
		<SceneContext.Provider value={{ scene }}>
			{children}
		</SceneContext.Provider>
	)
}

SceneContext.displayName = "SceneContext";