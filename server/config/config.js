import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOSTNAME,
    dialect: 'postgres',
<<<<<<< HEAD
    define: {
      timestamps: true,
    },
=======
>>>>>>> 6521e1fad0dcdf19a08ce84fb0b9ef846d5f9ceb
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
<<<<<<< HEAD
    define: {
      timestamps: true,
    },
=======
>>>>>>> 6521e1fad0dcdf19a08ce84fb0b9ef846d5f9ceb
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'postgres',
<<<<<<< HEAD
    define: {
      timestamps: true,
    },
=======
>>>>>>> 6521e1fad0dcdf19a08ce84fb0b9ef846d5f9ceb
  },
};
