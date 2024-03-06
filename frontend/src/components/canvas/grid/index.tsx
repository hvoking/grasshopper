// React imports
import { useState } from 'react';
// App imports
import './styles.scss';

export const Grid = () => {
	return (
		<div className="canvas-grid-wrapper">
			<div className="canvas-lines-wrapper">
				{Array.from({ length: 100 }).map((_, index) => (
					<div key={index} className="canvas-lines">
					</div>
				))}
			</div>
		</div>
	)
}

Grid.displayName="Grid";