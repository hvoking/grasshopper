// App imports
import { Ribbon } from './ribbon';
import { Canvas } from './canvas';
import './styles.scss';

export const Main = () => {
	return (
		<div className="main-wrapper">
			<Ribbon/>
			<Canvas/>
			<div></div>
		</div>
	)
}

Main.displayName="Main";