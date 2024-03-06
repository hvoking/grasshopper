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

	const favoriteFolders = [
		"geometries",
	    "animation",
	    "audio",
	    "cameras",
	    "core",
	    "extras",
	    "helpers",
	    "lights",
	    "loaders",
	    "materials",
	    "math",
	    "objects",
	    "renderers",
	    "scenes",
	    "textures"
	]

	const onwheel = (e: any) => { 
		toolsRef.current.scrollLeft += e.deltaY 
	}

	return (
		<Wrapper>
			<div ref={toolsRef} className="ribbon-wrapper" onWheel={onwheel}>
				{favoriteFolders.length > 0 && favoriteFolders.map((currentTool: any, index: number) => { 
					return <Tools key={index} currentTool={currentTool}/>
				})}
			</div>
		</Wrapper>
	)
}

Ribbon.displayName="Ribbon";