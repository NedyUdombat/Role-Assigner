
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import Config from '../config/config';
<<<<<<< HEAD
=======
// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
>>>>>>> 6521e1fad0dcdf19a08ce84fb0b9ef846d5f9ceb


const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
<<<<<<< HEAD

=======
// const config = require(`${__dirname}/../config/config.js`)[env];
>>>>>>> 6521e1fad0dcdf19a08ce84fb0b9ef846d5f9ceb

const config = Config[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0)
  && (file !== basename)
    && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
