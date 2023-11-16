// React imports
import { useRef } from 'react';

// Context imports
import { useFoldersApi } from '../context/api/folders';

// App imports
import { Subtools } from './subtools';
import './styles.scss';
 
export const Tools = () => {
	const { listOfTools } = useFoldersApi();
	const toolsRef = useRef<any>(null);

	const onwheel = (e: any) => { 
		toolsRef.current.scrollLeft += e.deltaY 
	}

	return (
		<div ref={toolsRef} className="tools" onWheel={onwheel}>
			{listOfTools.map((currentTool: any, index: number) => { 
				return <Subtools key={index} currentTool={currentTool}/>
			})}
		</div>
	)
}

Tools.displayName="Tools";