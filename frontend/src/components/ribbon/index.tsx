// React imports
import { useRef } from 'react';

// Context imports
import { useFoldersApi } from '../context/api/folders';

// App imports
import { Wrapper } from './wrapper';
import { Tools } from './tools';
import './styles.scss';
 
export const Ribbon = () => {
	const toolsRef = useRef<any>(null);
	const { foldersData } = useFoldersApi();

	const onwheel = (e: any) => { 
		toolsRef.current.scrollLeft += e.deltaY 
	}

	return (
		<Wrapper>
			<div ref={toolsRef} className="ribbon-wrapper" onWheel={onwheel}>
				{foldersData.length > 0 && foldersData.map((currentTool: any, index: number) => { 
					return <Tools key={index} currentTool={currentTool}/>
				})}
			</div>
		</Wrapper>
	)
}

Ribbon.displayName="Ribbon";