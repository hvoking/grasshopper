// Third-party imports
import { readFileSync } from 'fs';
import path from 'path';

const nodesTypesPath = path.resolve(__dirname, '../../../../../frontend/node_modules/@types/three/src/geometries');

export const getGeometryNode = (geometry: any) => {
  const currentPath = `${nodesTypesPath}/${geometry}.d.ts`;
  const currentPattern = /(\w+)(\??:) (\w+)(?:[,\)])/g;
  const currentFile = readFileSync(currentPath);
  const currentIterator = [...currentFile.toString().matchAll(currentPattern)];
  const nodeInputs = currentIterator.map(i => i.slice(1, 2)[0]);
  return { inputs: nodeInputs, output: geometry }
};