// React imports
import { useEffect, useState } from 'react';

// Context imports
import { useParameters } from '../../../context/parameters';

// Third-party imports
import { Mesh, Object3D, MeshBasicMaterial, Points, PointsMaterial, DoubleSide } from 'three';

export const Geometry = () => {
	const { currentGeometry, typeName, scene } = useParameters();
	const [ listOfGeometries, setListOfGeometries ] = useState<any>([]);
	
	useEffect(() => {
		currentGeometry && createMesh();
	}, [currentGeometry])

	const clearScene = (scene: any) => {
		while (scene.children.length)
		{
		    scene.remove(scene.children[0]);
		}
	}

	const createMesh = () => {
		const material = new MeshBasicMaterial( { color: 0xBBCC00, side: DoubleSide } );
		const pointMaterial = new PointsMaterial( { size: 3, sizeAttenuation: false, color: 'aqua' } );
		const group = new Object3D();
		clearScene(scene);
		scene.add(group);
		group.position.set(0, 0, 0);
		const points = new Points( currentGeometry, pointMaterial );
		const mesh = new Mesh( currentGeometry, material );
		const groupAdded = group.add(mesh, points);
		setListOfGeometries([...listOfGeometries, groupAdded])
	}
	return (
		<div>
		</div>
	)
}

Geometry.displayName="Geometry";