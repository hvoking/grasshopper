// React imports
import { useContext, createContext } from 'react';

// Third-party imports
import { WebGLRenderer } from 'three';

const RendererContext: React.Context<any> = createContext(null)

export const useRenderer = () => {
	return (
		useContext(RendererContext)
	)
}

export const RendererProvider = ({children}: any) => {
	const createNewRenderer = (): WebGLRenderer => {
		const renderer = new WebGLRenderer();
		renderer.setClearColor(0xd4d0c8);
		// renderer.setSize( window.innerWidth, window.innerHeight );
		return renderer
	}

	return (
		<RendererContext.Provider value={{ createNewRenderer }}>
			{children}
		</RendererContext.Provider>
	)
}

RendererContext.displayName = "RendererContext";