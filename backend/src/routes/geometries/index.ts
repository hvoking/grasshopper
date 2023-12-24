// App imports
import { getGeometries } from '../../services/geometries';

// Third-party imports
import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/geometries/', (req, res) => {
  const geometriesPath = path.resolve(__dirname, '../../../../frontend/node_modules/@types/three/src/geometries/');
  try {
    const resp = getGeometries(geometriesPath)
    res.send(resp);
  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'})
  }
});

export default router;