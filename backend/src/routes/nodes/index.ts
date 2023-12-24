// App imports
import { getNodes, getGeometryNode } from '../../services/nodes';

// Third-party imports
import express from 'express';

const router = express.Router();

router.get('/nodes_api', (req, res) => {
  try {
    const { node_name, type_name } = req.query;
    let resp = null;
    if (type_name === "nodes") {
      resp = getNodes(node_name)
    } 
    else {
      resp = getGeometryNode(node_name)
    }
    resp && res.send(resp)

  }
  catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error'})
  }
});

module.exports = router;