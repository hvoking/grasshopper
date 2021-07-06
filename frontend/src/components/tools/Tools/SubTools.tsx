import SubToolsContainer from './SubToolsContainer';
import SubToolsFooter from './SubToolsFooter';

interface SubToolsFooterType {
	folder: string; 
}

const SubTools = ({folder}: SubToolsFooterType) => {
	return (
		<>
			<SubToolsContainer />
			<SubToolsFooter folder={folder} />
		</>
	)
}

export default SubTools;