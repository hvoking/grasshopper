// Context imports
import { FoldersApiProvider } from './folders';
import { FilesApiProvider } from './files';
import { GeometriesApiProvider } from './geometries';
import { SearchApiProvider } from './search';
import { NodesApiProvider } from './nodes';

export const ApiProvider = ({ children }: any) => {

	return (
		<FoldersApiProvider>
		<FilesApiProvider>
		<GeometriesApiProvider>
		<NodesApiProvider>
		<SearchApiProvider>
			{ children }
		</SearchApiProvider>
		</NodesApiProvider>
		</GeometriesApiProvider>
		</FilesApiProvider>
		</FoldersApiProvider>
	)
}