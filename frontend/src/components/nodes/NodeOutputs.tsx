import { useSplinePosition } from '../../context/Context';

const NodeOutputs = ({nodeItem}: any) => {
	const {startSpline} = useSplinePosition();
	return (
		<div className="nodeOutputs">
			<div className="outputItem">{nodeItem.node && nodeItem.node[0]}
				<span onClick={startSpline} className="after"></span>
			</div>
		</div>
	)
}

export default NodeOutputs;