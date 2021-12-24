import { useSplinePosition } from '../../../context/SplineContext';
import { useRef } from 'react';

const NodeOutputs = ({nodeItem}: any) => {
	const outputKnob = useRef<any>(null)
	const {startTransmitting, splineStartPositionSet, activeSplineSet} = useSplinePosition()
	const activateSpline = (e: any) => {
		splineStartPositionSet({x: e.clientX, y: e.clientY - 179});
		activeSplineSet(true);
	}
	return (
		<div className="nodeOutputs">
			<div className="outputItem">{nodeItem.output && nodeItem.output[0]}
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

NodeOutputs.displayName="NodeOutputs";
export default NodeOutputs;