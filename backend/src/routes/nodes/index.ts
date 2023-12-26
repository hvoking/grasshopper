// App imports
import { getNodes } from '../../services/nodes/info';
import { getGeometryNode } from '../../services/nodes/geometry';

// Third-party imports
import express from 'express';

const router = express.Router();

router.get('/nodes', (req, res) => {
  const { nodeName, typeName } = req.query;

  try {
    let resp = null;
    if (typeName === "nodes") {
      resp = getNodes(nodeName)
    } 
    else {
      resp = getGeometryNode(nodeName)
    }
    resp && res.send(resp)

  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'})
  }
});

export default router;