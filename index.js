import 'dotenv/config';
import express from 'express';
import config from './config';

// Bootstrap express
import expressConfig from './config/express';

const port = config.PORT || 8080;

const app = express();

expressConfig(app);

//   console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', config);

app.listen(port);
logger.info(`Application started on port ${port}`);

export default app;
