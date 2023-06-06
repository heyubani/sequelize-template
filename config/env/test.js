const {
  NODE_ENV,
  TEST_PORT,
  TEST_DATABASE_URL
} = process.env;

export default {
  NODE_ENV,
  PORT: TEST_PORT,
  SPENDIT_DATABASE_URL: TEST_DATABASE_URL
};
