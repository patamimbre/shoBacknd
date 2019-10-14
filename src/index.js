import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config';


const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

app.use('/v1', routes);


app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`));
