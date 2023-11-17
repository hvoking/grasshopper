// Context imports
import { FoldersApiProvider } from './folders';
import { FilesApiProvider } from './files';
import { GeometriesApiProvider } from './geometries';
import { SearchApiProvider } from './search';

export const ApiProvider = ({ children }: any) => {

	return (
		<FoldersApiProvider>
		<FilesApiProvider>
		<GeometriesApiProvider>
		<SearchApiProvider>
			{ children }
		</SearchApiProvider>
		</GeometriesApiProvider>
		</FilesApiProvider>
		</FoldersApiProvider>
	)
}