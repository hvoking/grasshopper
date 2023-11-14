// React imports
import { useState, useEffect, useRef } from 'react';

// App imports
import { SubTools } from './subTools';
import './styles.scss';
 
export const Tools = () => {
	const [listOfTools, listOfToolsSet] = useState<string[]>([])
	const toolsRef = useRef<any>()

	useEffect(() => {
		const getFolders = () => {
			fetch('http://localhost:8000/folders/')
			.then(res => res.json())
			.then(data => {
				listOfToolsSet(data.folders)
			})
		}
		getFolders();
	}, [])

	const onwheel = (e: any) => {
		toolsRef.current.scrollLeft += e.deltaY
	}

	return (
		<div ref={toolsRef} onWheel={onwheel} className="tools">
			{listOfTools.map((folder: any, index: number) => { 
				return (
					<div key={index} className="subTools">
						<SubTools folder={folder} />
					</div>
				)
			})}
		</div>
	)
}

Tools.displayName="Tools";