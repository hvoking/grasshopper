// Context imports
import { FoldersApiProvider } from './folders';
import { FilesApiProvider } from './files';
import { SearchApiProvider } from './search';
import { NodesApiProvider } from './nodes';

export const ApiProvider = ({ children }: any) => {

	return (
		<FoldersApiProvider>
		<FilesApiProvider>
		<NodesApiProvider>
		<SearchApiProvider>
			{ children }
		</SearchApiProvider>
		</NodesApiProvider>
		</FilesApiProvider>
		</FoldersApiProvider>
	)
}