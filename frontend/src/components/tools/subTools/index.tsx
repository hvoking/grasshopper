// App imports
import { Container } from './container';
import { Footer } from './footer';

export const SubTools = ({ currentTool }: any) => {
	return (
		<>
			<Container/>
			<Footer currentTool={currentTool}/>
		</>
	)
}

SubTools.displayName="SubTools";