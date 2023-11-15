// App imports
import { SubToolsList } from './list';
import './styles.scss';

// Context imports
import { useFilesApi } from '../../../main/context/api/files';

export const Footer = ({ files }: any) => {
	const { subToolsList, onMouseEnter, onMouseLeave } = useFilesApi();

	return (
		<div 
			className="subToolsFooterWrapper"
			onMouseLeave={onMouseLeave} 
		>
			<div 
				className="subToolsFooter"
				onMouseEnter={onMouseEnter} 
			>
				<div>{files}</div>
				<span>&darr;</span>
			</div>
			{subToolsList && <SubToolsList/>}
		</div>
	)
}

Footer.displayName="Footer";