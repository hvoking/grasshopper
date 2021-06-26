import { useState } from 'react';

const Tools = () => {
	const [subToolsList, subToolsListSet] = useState(false)
	let timer: any = 0;

	const onMouseEnter = () => {
		timer = setTimeout(() => subToolsListSet(true), 200)
	}
	const onMouseLeave = () => {
		subToolsListSet(false);
		clearTimeout(timer);
	}
	return (
		<div className="tools">
			<div onMouseLeave={onMouseLeave} className="subTools">
				<div className="subToolsContainer">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div onMouseEnter={onMouseEnter} className="subToolsFooter">Geometry<span>&darr;</span></div>
				{subToolsList && <div className="subToolsList">
					<div>fetch</div>
					<div>with</div>
					<div>items</div>
				</div>}

			</div>

			<div className="subTools">
				<div className="subToolsContainer"></div>
				<div className="subToolsFooter">Primitive<span>&darr;</span></div>
			</div>
			<div className="subTools">
				<div className="subToolsContainer"></div>
				<div className="subToolsFooter">Input<span>&darr;</span></div>
			</div>
			<div className="subTools">
				<div className="subToolsContainer"></div>
				<div className="subToolsFooter">Util<span>&darr;</span></div>
			</div>
		</div>
	)
}

export default Tools;