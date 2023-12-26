// Third-party imports
import { readdirSync } from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname, '../../../../frontend/node_modules/@types/three/src');

export const getFolders = () => {
  const resp = readdirSync(filePath, { withFileTypes: true })
    .filter(item => item.isDirectory())
    .map(item => item.name)
  return resp
}