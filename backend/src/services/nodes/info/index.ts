// App imports
import { nodesPattern, inputPattern, wordsPattern } from './patterns';

// Third-party imports
import { readFileSync } from 'fs';
import path from 'path';

const nodesTypesPath = path.resolve(__dirname, '../../../../../frontend/node_modules/@types/three/src');
const exportationPath = path.resolve(__dirname, '../../../../../frontend/node_modules/@types/three/src/Three.d.ts');

export const getNodes = (nodeName: any) => {
  const text = readFileSync(exportationPath);
  const nodePath = nodesPattern(nodeName, text);
  const formatedPath = nodesTypesPath + nodePath[0].replace("'", '').replace('.', '') + '.d.ts';
  const nodeInfo = readFileSync(formatedPath);
  const nodeInput = inputPattern(nodeInfo);
  const nodeInputWords = wordsPattern(nodeInput);
  return { inputs: nodeInputWords, output: nodeName };
};