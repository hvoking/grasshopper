// App imports
import { Wrapper } from './wrapper';
import { Tools } from './tools';
import { ThreejsCanvas } from './canvas';

export const Main = () => {
	return (
		<div className="wrapper">
		    <Wrapper>
		    	<Tools/>
		    </Wrapper>
		    <ThreejsCanvas/>
		  <div></div>
		</div>
	)
}

Main.displayName="Main";