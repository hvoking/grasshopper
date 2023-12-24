// React imports
import { useRef } from 'react';

// Context imports
import { useFoldersApi } from '../context/api/folders';

// App imports
import { Subtools } from './subtools';
import './styles.scss';
 
export const Tools = () => {
	const toolsRef = useRef<any>(null);
	const { foldersData } = useFoldersApi();

	const onwheel = (e: any) => { 
		toolsRef.current.scrollLeft += e.deltaY 
	}

	return (
		<div ref={toolsRef} className="tools" onWheel={onwheel}>
			{foldersData.length > 0 && foldersData.map((currentTool: any, index: number) => { 
				return <Subtools key={index} currentTool={currentTool}/>
			})}
		</div>
	)
}

Tools.displayName="Tools";