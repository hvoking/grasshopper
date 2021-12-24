import { useState, useEffect } from 'react';
import './Tools.scss';
import SubTools from './SubTools';
 
const Tools = () => {
	const [listOfTools, listOfToolsSet] = useState<string[]>([])

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
	return (
		<div className="tools">
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
export default Tools;