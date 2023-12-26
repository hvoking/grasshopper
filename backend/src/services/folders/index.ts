// Third-party imports
import { readdirSync } from 'fs';
import path from 'path';

const srcPath = '../../../../frontend/node_modules/@types/three/src'

export const getFolders = () => {
  const filePath = path.resolve(__dirname, srcPath);
  const resp = readdirSync(filePath, { withFileTypes: true })
    .filter(item => item.isDirectory())
    .map(item => item.name)
  return resp
}

export const getGeometries = () => {
  const filePath = path.resolve(__dirname, srcPath + '/geometries');
  const currentDir = readdirSync(filePath)
    .map(item => item.split('.d.ts')[0])
  return currentDir.sort();
};