// App imports
import { getMaterialNode } from '../../services/nodes/material';
import { getGeometryNode } from '../../services/nodes/geometry';
import { getNodes } from '../../services/nodes/info';

// Third-party imports
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const { folderName, nodeName } = req.query;

  try {
    let resp = null;
    if (folderName === "materials") {
      resp = getMaterialNode(nodeName)
    }
    else if (folderName === "geometries") {
      resp = getGeometryNode(nodeName)
    } 
    else {
      resp = getNodes(nodeName)
    }
    resp && res.send(resp)

  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'})
  }
});

export default router;