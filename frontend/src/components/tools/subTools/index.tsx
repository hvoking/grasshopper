// App imports
import { SubToolsContainer } from './container';
import { SubToolsFooter } from './footer';

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