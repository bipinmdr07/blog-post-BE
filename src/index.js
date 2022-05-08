import 'dotenv/config';

import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import logger, { logStream } from './utils/logger';
import compression from 'compression';

import { publicRouter } from './routes';

import config from './config';

const app = express();

const APP_PORT = config.app.port;
const APP_HOST = config.app.host;

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.locals.title = config.app.name;
app.locals.version = config.app.version;

app.use(helmet());
app.use(compression());
app.use(morgan('tiny', { stream: logStream }));
app.use(bodyParser.json());

process.send = process.send || function () {};

// Public routes
app.use('/api/v1', publicRouter);

app.listen(app.get('port'), app.get('host'), () => {
  logger.info(
    `Server started at http://${app.get('host')}:${app.get('port')}/api/v1`
  );
});

process.on('unhandledRejection', err => {
  logger.error('Unhandled rejection', err);
});

process.on('uncaughtException', err => {
  logger.error('Uncaught exception', err);
});

export default app;
