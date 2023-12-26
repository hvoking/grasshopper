// Third-party imports
import express, { Express, Request } from 'express';
import cors from "cors";

// Routes imports
import filesRouter from './routes/files';
import foldersRouter from './routes/folders';
import nodesRouter from './routes/nodes';
import searchRouter from './routes/search';

const app: Express = express();
const port: number = 8000;

app.use(cors<Request>());
app.use('/files', filesRouter);
app.use('/folders', foldersRouter);
app.use('/nodes', nodesRouter);
app.use('/search', searchRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})