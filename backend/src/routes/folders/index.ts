// App imports
import { getGeometries } from '../../services/folders/geometries';
import { getFolders } from '../../services/folders';

// Third-party imports
import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const resp = getFolders()
    res.send(resp);
  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'})
  }
});

router.get('/geometries', (req, res) => {
  const currentPath = '../../../../frontend/node_modules/@types/three/src/geometries/';
  const geometriesPath = path.resolve(__dirname, currentPath);
  
  try {
    const resp = getGeometries(geometriesPath);
    res.json(resp);
  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'});
  }
});

export default router;