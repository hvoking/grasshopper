// App imports
import { SubToolsContainer } from './SubToolsContainer';
import { SubToolsFooter } from './SubToolsFooter';

interface SubToolsFooterType {
	folder: string; 
}

export const SubTools = ({folder}: SubToolsFooterType) => {
	return (
		<>
			<SubToolsContainer />
			<SubToolsFooter folder={folder} />
		</>
	)
}

SubTools.displayName="SubTools";