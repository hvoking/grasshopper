// Context imports
import { CameraProvider } from './camera';
import { RendererProvider } from './renderer';
import { SceneProvider } from './scene';

export const ThreeProvider = ({ children }: any) => {
	return (
		<RendererProvider>
		<SceneProvider>
		<CameraProvider>
			{ children }
		</CameraProvider>
		</SceneProvider>
		</RendererProvider>
	)
}