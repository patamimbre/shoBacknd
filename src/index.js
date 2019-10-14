import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';

import routes from './routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

app.use('/v1', routes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
