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
			color: 0xBBCC00, 
			side: THREE.DoubleSide, 
			roughness: 0.123 
		})
	);
	const [ pointMaterial, setPointMaterial ] = useState<any>(
		new THREE.PointsMaterial({ 
			size: 3, 
			sizeAttenuation: false, 
			color: 'aqua' 
		})
	);

	return (
		<MaterialContext.Provider value={{ pointMaterial, meshMaterial }}>
			{children}
		</MaterialContext.Provider>
	)
}

MaterialContext.displayName = "MaterialContext";