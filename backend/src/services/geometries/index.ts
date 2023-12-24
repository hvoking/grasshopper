// Third-party imports
import { readdirSync } from 'fs';

export const getGeometries = (path: any) => {
  const geometries: any = [];
  readdirSync(path).forEach((file) => {
    if (file !== 'Geometries.d.ts') {
      const geometryName = file.split('.d.ts')[0];
      geometries.push(geometryName);
    }
  });
  return geometries.sort();
};