// React imports
import { useState, useContext, createContext } from 'react';

// Third-party imports
import * as THREE from 'three';

const MaterialContext: React.Context<any> = createContext(null)

export const useMaterial = () => {
	return (
		useContext(MaterialContext)
	)
}

export const MaterialProvider = ({children}: any) => {
	const [ meshMaterial, setMeshMaterial ]  = useState<any>(
		new THREE.MeshStandardMaterial({ 
			color: new THREE.Color(1, 0, 0), 
			opacity: 0.8, 
			transparent: true,
			side: THREE.DoubleSide, 
			roughness: 0.123 
		})
	);
	const [ pointMaterial, setPointMaterial ] = useState<any>(
		new THREE.PointsMaterial({ 
			size: 2, 
			sizeAttenuation: false, 
			color: new THREE.Color(1, 1, 1),
		})
	);

	return (
		<MaterialContext.Provider value={{ pointMaterial, meshMaterial }}>
			{children}
		</MaterialContext.Provider>
	)
}

MaterialContext.displayName = "MaterialContext";