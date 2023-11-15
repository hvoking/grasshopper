// Context imports
import { FoldersApiProvider } from './folders';
import { FilesApiProvider } from './files';

export const ApiProvider = ({ children }: any) => {

	return (
		<FoldersApiProvider>
		<FilesApiProvider>
			{ children }
		</FilesApiProvider>
		</FoldersApiProvider>
	)
}