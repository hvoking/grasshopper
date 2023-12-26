export const nodesPattern = (node: any, text: any) => {
  const currentPattern = new RegExp(`(\\.\/)(.+)\/(${node})`, 'g');
  const currentIterator = [...text.toString().matchAll(currentPattern)];
  return currentIterator.map(i => i[0]);
};

export const inputPattern = (nodeInfo: any) => {
  const currentPattern = /constructor\((.*)\)/g;
  const currentIterator = [...nodeInfo.toString().matchAll(currentPattern)];
  return currentIterator.map(i => i[1]);
};

export const wordsPattern = (nodeInput: any) => {
  const currentPattern = /(\w+)(\??:)/g;
  const currentIterator = [...nodeInput.toString().matchAll(currentPattern)];
  return currentIterator.map(i => i[1]);
};