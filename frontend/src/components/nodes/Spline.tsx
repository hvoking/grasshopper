import { useSplinePosition } from '../../context/Context';

const Spline = () => {
	const {splinePosition} = useSplinePosition()
	return (
		<svg>
			<path className="spline" d={`M ${splinePosition.x} ${splinePosition.x} C ${20} ${20}, ${40} ${20}, ${50} ${10}`}></path>
		</svg>
	)
}

export default Spline;