require('dotenv').config();

module.exports = {
  development: {
    url: process.env.SPENDIT_DEV_DATABASE_URL,
    dialect: 'postgres'
  },
  test: {
    url: process.env.SPENDIT_TEST_DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    url: process.env.SPENDIT_PROD_DATABASE_URL,
    dialect: 'postgres'
  }
};
