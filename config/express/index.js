import helmet from 'helmet';
import 'dotenv/config';
import { json, urlencoded } from 'express';
import compression from 'compression';
import cors from 'cors';
import loggerInit from '../logger/index';
import enums from '../../lib/enums/index';
import routes from '../routers';
import {db} from '../db';
import config from '..';

const expressConfig = app => {
  let logger;

  switch (config.SPENDIT_NODE_ENV) {
  case 'development':
    logger = loggerInit('development');
    break;

  case 'production':
    logger = loggerInit('production');
    break;

  case 'test':
    logger = loggerInit('test');
    break;

  default:
    logger = loggerInit();
  }

  global.logger = logger;
  logger.info(`${enums.CURRENT_TIME_STAMP} Application starting...`);
  logger.debug('Overriding \'Express\' logger');
  logger.info(`${enums.CURRENT_TIME_STAMP} Environment is ${process.env.SPENDIT_NODE_ENV}`);

  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors());
  app.use(helmet());
  app.use(compression());

  // allow certain domains and allow certain HTTP methods
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  // db connection
  db.authenticate()
    .then(() => {
      logger.info('Database connection successful');
    })
    .catch((error) => {
      logger.info('Unable to connect to the database:', error.message);
    });

  // Welcome route
  app.get('/', (_req, res) => {
    res.send({ message: enums.WELCOME });
  });

  // Other routes
  routes(app);

  // error handlers

  // catch 404 and forward to error handler
  app.use((_req, res) => res.status(enums.HTTP_NOT_FOUND).json({
    status: enums.ERROR_STATUS,
    code: enums.HTTP_NOT_FOUND,
    message: enums.DEAD_END_MESSAGE
  }));

  // catch server related errors and forward to error handler
  app.use((err, _req, res) => {
    res.status(enums.HTTP_INTERNAL_SERVER_ERROR).json({
      status: err.status || enums.ERROR_STATUS,
      message: err.message || enums.SOMETHING_BROKE_MESSAGE
    });
  });
};

export default expressConfig;
