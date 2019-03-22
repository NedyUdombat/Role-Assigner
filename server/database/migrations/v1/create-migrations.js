import pool from '../../dbConfig';
import createTables from './create';

const createMigrations = async () => {
  try {
    await pool.query(createTables.membersTable);
  } catch (error) {
    console.log(error);
  }
};
createMigrations();

export default createMigrations();
