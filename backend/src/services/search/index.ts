// App imports
import { getNodesNames, getGeometriesNames } from './names';

// Third-party imports
import path from 'path';

const geometriesPath = path.resolve(__dirname, "../../../../frontend/node_modules/@types/three/src/geometries/");
const exportationPath = path.resolve(__dirname, "../../../../frontend/node_modules/@types/three/src/Three.d.ts");

export const searchNode = (node: any) => {
  const nodesNames = getNodesNames(exportationPath);
  const geometriesNames = getGeometriesNames(geometriesPath);
  const nodes = nodesNames.concat(geometriesNames);
  const filterNodes = nodes.filter((currentNode: any) => {
    if (currentNode.toLowerCase().includes(node.toLowerCase())) {
      return currentNode
    }
  })
  return filterNodes
};