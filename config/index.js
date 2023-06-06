import 'dotenv/config';
import { devEnv, prodEnv, testEnv } from './env/';

const { SPENDIT_NODE_ENV } = process.env;
const envConfig = {
  development: devEnv,
  production: prodEnv,
  test: testEnv
};

const config = envConfig[SPENDIT_NODE_ENV] || { development: devEnv };

export default config;
