// App imports
import { Container } from './container';
import { Footer } from './footer';
import './styles.scss';

export const Tools = ({ currentTool }: any) => {
	return (
		<div className="tools-wrapper">
			<Container/>
			<Footer currentTool={currentTool}/>
		</div>
	)
}

Tools.displayName="Tools";