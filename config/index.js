import 'dotenv/config';
import { devEnv, prodEnv, testEnv } from './env/';

const { NODE_ENV } = process.env;
const envConfig = {
  development: devEnv,
  production: prodEnv,
  test: testEnv
};

const config = envConfig[NODE_ENV] || devEnv;

export default config;
