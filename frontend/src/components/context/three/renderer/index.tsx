// React imports
import { useContext, createContext } from 'react';

// Third-party imports
import * as THREE from 'three';

const RendererContext: React.Context<any> = createContext(null)

export const useRenderer = () => {
	return (
		useContext(RendererContext)
	)
}

export const RendererProvider = ({children}: any) => {
	const createNewRenderer = (): any => {
		const renderer = new THREE.WebGLRenderer();
		renderer.setClearColor(0xd4d0c8);
		// renderer.setPixelRatio(window.devicePixelRatio)
		renderer.setSize( window.innerWidth, window.innerHeight - 178 );
		return renderer
	}

	return (
		<RendererContext.Provider value={{ createNewRenderer }}>
			{children}
		</RendererContext.Provider>
	)
}

RendererContext.displayName = "RendererContext";