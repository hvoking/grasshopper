// App imports
import { SubToolsList } from './list';
import './styles.scss';

// Context imports
import { useFilters } from '../../../context/filters';

export const Footer = ({ currentTool }: any) => {
	const { currentFile, setCurrentFile, delay, setDelay } = useFilters();

	const onMouseEnter = () => {
		setDelay(setTimeout(() => setCurrentFile(currentTool), 200))
	}

	const onMouseLeave = () => {
		clearTimeout(delay);
		setCurrentFile(null);
	}

	return (
		<div className="subtools-footer-wrapper" onMouseLeave={onMouseLeave}>
			<div className="subtools-footer" onMouseEnter={onMouseEnter}>
				<div>{currentTool}</div>
				<span>&darr;</span>
			</div>
			{currentFile === currentTool && <SubToolsList/>}
		</div>
	)
}

Footer.displayName="Footer";