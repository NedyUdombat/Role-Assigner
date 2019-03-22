import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DB_URL;

const pool = new Pool({
  connectionString,
});
export default {
  query(queries) {
    return new Promise((resolve, reject) => {
      pool.query(queries)
        .then((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  },
};
