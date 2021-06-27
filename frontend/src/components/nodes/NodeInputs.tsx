import { useSplinePosition } from '../../context/Context';

const NodeInputs = ({nodeItem}: any) => {
	const {startSpline} = useSplinePosition()
	return (
		<div className="nodeInputs">
			{nodeItem.nodes && nodeItem.nodes.map((item: any, index: number) => {
				return (
					<div key={index} className="inputItem">
						<span onClick={startSpline} className="before"></span>{item}
					</div>
				)
			})}
		</div>
	)
}

export default NodeInputs;