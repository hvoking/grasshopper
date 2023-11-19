// Context imports
import { FoldersApiProvider } from './folders';
import { FilesApiProvider } from './files';
import { GeometriesApiProvider } from './geometries';
import { SearchApiProvider } from './search';
import { DetailApiProvider } from './detail';

export const ApiProvider = ({ children }: any) => {

	return (
		<FoldersApiProvider>
		<FilesApiProvider>
		<GeometriesApiProvider>
		<SearchApiProvider>
		<DetailApiProvider>
			{ children }
		</DetailApiProvider>
		</SearchApiProvider>
		</GeometriesApiProvider>
		</FilesApiProvider>
		</FoldersApiProvider>
	)
}