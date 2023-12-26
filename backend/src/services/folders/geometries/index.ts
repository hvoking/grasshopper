// Third-party imports
import { readdirSync } from 'fs';
import path from 'path';

const currentPath = '../../../../../frontend/node_modules/@types/three/src/geometries/';
const filePath = path.resolve(__dirname, currentPath);

export const getGeometries = () => {
  const currentDir = readdirSync(filePath)
    .map(item => item.split('.d.ts')[0])
  return currentDir.sort();
};