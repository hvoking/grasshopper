// App imports
import './styles.scss';

// Context imports
import { useSpline } from '../../../context/spline';

interface splinePositionType { 
	x: number; 
	y: number; 
};

interface distanceType {
	(a: splinePositionType, b: splinePositionType): number
}

export const Spline = () => {
	const { splineStartPosition, splineEndPosition, activeSpline } = useSpline();

	const distance: distanceType = (a, b) => (Math.sqrt((b.x - a.x)**2 + (b.y - a.y)**2));
	const dist = distance(splineStartPosition, splineEndPosition);

	if (!activeSpline) return <></>

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

Spline.displayName="Spline";