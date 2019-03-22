import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
  },
};
