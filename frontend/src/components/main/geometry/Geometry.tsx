import { useEffect, useState } from 'react';
import { useScene } from '../../../context/SceneContext';
import {Mesh, Object3D, MeshBasicMaterial, Points, PointsMaterial} from 'three';
import {useSearch} from '../../../context/SearchContext';

const Geometry = () => {
	const scene = useScene();
	const {currentGeometry} = useSearch();
	const [listOfGeometries, listOfGeometriesSet] = useState<any>([])
	// useEffect(() => {
	// 	currentGeometry && createMesh()
	// }, [currentGeometry])

	const clearScene = (scene: any) => {
		while (scene.children.length)
		{
		    scene.remove(scene.children[0]);
		}
	}

	const createMesh = () => {
		const material = new MeshBasicMaterial( { color: 0xBBCC00 } );
		const pointMaterial = new PointsMaterial( { size: 3, sizeAttenuation: false, color: 'aqua' } );
		const group = new Object3D();
		clearScene(scene);
		scene.add(group);
		group.position.set(0, 0, 0);
		const mesh = new Points( currentGeometry, pointMaterial );
		const groupAdded = group.add(mesh);
		listOfGeometriesSet([...listOfGeometries, groupAdded])
		console.log(listOfGeometries)
	}
	return (
		<div>
			
		</div>
	)
}

Geometry.displayName="Geometry";
export default Geometry;