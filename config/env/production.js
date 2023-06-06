const {
  NODE_ENV,
  PROD_PORT,
  PROD_DATABASE_URL
} = process.env;

export default {
  NODE_ENV,
  PORT: PROD_PORT,
  DATABASE_URL: PROD_DATABASE_URL
};
