// React imports
import { useEffect, useContext, createContext } from 'react';

// Context imports
import { useFilters } from '../../filters';
import { useCanvas } from '../canvas';
import { useMaterial } from '../material';

// Third-party imports
import * as THREE from 'three';

const GeometryContext: React.Context<any> = createContext(null)

export const useGeometry = () => {
	return (
		useContext(GeometryContext)
	)
}

export const GeometryProvider = ({children}: any) => {
	const { currentGeometry } = useFilters();
	const { scene, clearScene } = useCanvas();
	const { meshMaterial, pointMaterial } = useMaterial();
	
	useEffect(() => {
		const createMesh = () => {
			const group = new THREE.Object3D();
			group.position.set(0, 0, 0);
			
			const points = new THREE.Points( currentGeometry, pointMaterial );
			const mesh = new THREE.Mesh( currentGeometry, meshMaterial );
			group.add(mesh, points);

			clearScene(scene);
			const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 2 )
			scene.add(light);
			scene.add(group);
		}
		currentGeometry && createMesh();
	}, [currentGeometry]);

	return (
		<GeometryContext.Provider value={{ }}>
			{children}
		</GeometryContext.Provider>
	)
}

GeometryContext.displayName = "GeometryContext";