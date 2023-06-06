import config  from '../../config/index';
import { Sequelize } from 'sequelize';

const db = new Sequelize(config.DATABASE_URL, {
  host: 'localhost',
  dialect: 'postgres'
});

export { db };
