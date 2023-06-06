import { DataTypes } from 'sequelize'; 
import { uuidv4 } from 'uuid'; 
import { db } from '../../config/db/index.js'; 

const User = db.define('Users', {
  user_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: `user-${uuidv4().replace(/-/g, '').toLowerCase()}`
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  middle_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
