// import pgp from 'pg-promise';
// import promise from 'bluebird';
// import 'dotenv/config'
import config  from '../../config/index';
import { Sequelize } from 'sequelize';
// Initialize postgres database
// const pg = pgp({ promiseLib: promise, noWarnings: true });
// const db = pg(config.SPENDIT_DATABASE_URL);

const db = new Sequelize(process.env.SPENDIT_DEV_DATABASE_URL, {
  host: 'localhost',
  dialect: 'postgres'
});
console.log(config);
export { db };
