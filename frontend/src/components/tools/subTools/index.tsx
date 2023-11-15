// App imports
import { Container } from './container';
import { Footer } from './footer';
import './styles.scss';

export const Subtools = ({ index, currentTool }: any) => {
	return (
		<div key={index} className="subtools">
			<Container/>
			<Footer currentTool={currentTool}/>
		</div>
	)
}

Subtools.displayName="Subtools";