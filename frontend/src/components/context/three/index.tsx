// Context imports
import { CameraProvider } from './camera';
import { RendererProvider } from './renderer';

export const ThreeProvider = ({ children }: any) => {
	return (
		<RendererProvider>
		<CameraProvider>
			{ children }
		</CameraProvider>
		</RendererProvider>
	)
}