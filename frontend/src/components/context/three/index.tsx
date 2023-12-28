// Context imports
import { CanvasProvider } from './canvas';
import { MaterialProvider } from './material';
import { GeometryProvider } from './geometry';

export const ThreeProvider = ({ children }: any) => {
	return (
		<CanvasProvider>
		<MaterialProvider>
		<GeometryProvider>
			{ children }
		</GeometryProvider>
		</MaterialProvider>
		</CanvasProvider>
	)
}