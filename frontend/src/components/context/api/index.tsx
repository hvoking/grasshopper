// Context imports
import { FoldersApiProvider } from './folders';
import { FilesApiProvider } from './files';
import { GeometriesApiProvider } from './geometries';

export const ApiProvider = ({ children }: any) => {

	return (
		<FoldersApiProvider>
		<FilesApiProvider>
		<GeometriesApiProvider>
			{ children }
		</GeometriesApiProvider>
		</FilesApiProvider>
		</FoldersApiProvider>
	)
}