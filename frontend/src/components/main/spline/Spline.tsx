import { useSplinePosition, splinePositionType } from '../../../context/SplineContext';
import './Spline.scss';

interface distanceType {
	(a: splinePositionType, b: splinePositionType): number
}

const Spline = () => {
	const {splineStartPosition, splineEndPosition} = useSplinePosition();
	const distance: distanceType = (a, b) => {
		return Math.sqrt((b.x - a.x)**2 + (b.y - a.y)**2)
	}
	const dist = distance(splineStartPosition, splineEndPosition)
	return (
		<svg>
			<path className="spline" d={`
				M ${splineStartPosition.x} ${splineStartPosition.y} 
				C ${splineStartPosition.x + dist * 0.18} ${splineStartPosition.y}, 
				${splineEndPosition.x - dist * 0.35} ${splineEndPosition.y}, 
				${splineEndPosition.x} ${splineEndPosition.y}`}>
			</path>
		</svg>
	)
}

export default Spline;