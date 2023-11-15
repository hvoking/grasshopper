// App imports
import { Container } from './container';
import { Footer } from './footer';
import './styles.scss';

export const Subtools = ({ currentTool }: any) => {
	return (
		<div className="subtools">
			<Container/>
			<Footer currentTool={currentTool}/>
		</div>
	)
}

Subtools.displayName="Subtools";