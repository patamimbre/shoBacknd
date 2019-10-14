import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config';

const app = express();

mongoose.connect(`mongodb://${config.MONGO_URL}:${config.MONGO_PORT}/${config.MONGO_DB}`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

app.use('/v1', routes);


app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`));
