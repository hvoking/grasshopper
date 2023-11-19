// React imports
import { useRef } from 'react';

// App imports
import './styles.scss';

// Context imports
import { useSpline } from '../../../../context/spline';

export const Outputs = ({nodeItem}: any) => {
	const { startTransmitting, setSplineStartPosition, setActiveSpline } = useSpline();

	const outputKnob = useRef<any>(null);

	const activateSpline = (e: any) => {
		setSplineStartPosition({x: e.clientX, y: e.clientY - 179});
		setActiveSpline(true);
	}

	return (
		<div className="node-outputs">
			<div className="output-item">
				<div>
					{nodeItem.output && nodeItem.output[0]}
				</div>
				<span 
					ref={outputKnob} 
					className="after" 
					onClick={activateSpline}
					onMouseOut={startTransmitting}
				>
				</span>
			</div>
		</div>
	)
}

Outputs.displayName="Outputs";