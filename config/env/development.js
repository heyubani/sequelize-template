const {
  NODE_ENV,
  DEV_PORT,
  DEV_DATABASE_URL
} = process.env;

export default {
  NODE_ENV, 
  PORT: DEV_PORT, 
  DATABASE_URL: DEV_DATABASE_URL 
};
