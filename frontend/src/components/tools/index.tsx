// React imports
import { useRef } from 'react';

// Context imports
import { useFoldersApi } from '../main/context/api/folders';

// App imports
import { SubTools } from './subTools';
import './styles.scss';
 
export const Tools = () => {
	const { listOfTools } = useFoldersApi();
	const toolsRef = useRef<any>();

	const onwheel = (e: any) => { 
		toolsRef.current.scrollLeft += e.deltaY 
	}

	return (
		<div 
			ref={toolsRef} 
			onWheel={onwheel} 
			className="tools"
		>
			{listOfTools.map((currentTool: any, index: number) => { 
				return (
					<div 
						key={index} 
						className="subTools"
					>
						<SubTools currentTool={currentTool} />
					</div>
				)
			})}
		</div>
	)
}

Tools.displayName="Tools";