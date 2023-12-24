// App imports
import { Wrapper } from './wrapper';
import { Tools } from './tools';
import { ThreejsCanvas } from './canvas';
import './styles.scss';

export const Main = () => {
	return (
		<div className="main-wrapper">
		    <Wrapper>
		    	<Tools/>
		    </Wrapper>
		    <ThreejsCanvas/>
		  <div></div>
		</div>
	)
}

Main.displayName="Main";