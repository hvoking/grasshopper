// Third-party imports
import { readFileSync } from 'fs';
import path from 'path';

const materialPath = path.resolve(__dirname, '../../../../../frontend/node_modules/@types/three/src/materials');

export const getMaterialNode = (material: any) => {
  const currentPath = `${materialPath}/${material}.d.ts`;
  const currentPattern = /(\w+)(\??:) (\w+)(?:[,\)])/g;
  const currentFile = readFileSync(currentPath);
  const currentIterator = [...currentFile.toString().matchAll(currentPattern)];
  const currentInterface = currentIterator.map(i => i.slice(1, 3));
  const nodeInputs = currentInterface.map(i => i[0]);
  const resp = { inputs: nodeInputs, output: material }
  return resp;
};