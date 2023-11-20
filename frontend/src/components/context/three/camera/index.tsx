// React imports
import { useContext, createContext } from 'react';

// Third-party imports
import { PerspectiveCamera } from 'three';

const CameraContext: React.Context<any> = createContext(null)

export const useCamera = () => {
	return (
		useContext(CameraContext)
	)
}

export const CameraProvider = ({children}: any) => {
	const makeCamera = (fov: number = 10): PerspectiveCamera => {
		const aspect = 2;
		const near = 0.1;
		const far = 1000;
		return new PerspectiveCamera(fov, aspect, near, far);
	}

	const createNewCamera = () => {
		const camera = makeCamera();
		camera.position.set(2, 2, 2).multiplyScalar(8);
		camera.lookAt(0, 0, 0);
		return camera
	}

	return (
		<CameraContext.Provider value={{ createNewCamera }}>
			{children}
		</CameraContext.Provider>
	)
}

CameraContext.displayName = "CameraContext";