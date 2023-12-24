// Third-party imports
import express, { Express, Request } from 'express';
import cors from "cors";

// Routes imports
import geometriesRouter from './routes/geometries';
import parametersRouter from './routes/parameters';
import foldersRouter from './routes/folders';
import filesRouter from './routes/files';
import searchRouter from './routes/search';
import nodesRouter from './routes/nodes';

const app: Express = express();
const port: number = 8000;

app.use(cors<Request>());
app.use('/', geometriesRouter);
app.use('/', parametersRouter);
app.use('/', foldersRouter);
app.use('/', filesRouter);
app.use('/', searchRouter);
app.use('/', nodesRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})