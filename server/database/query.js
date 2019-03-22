import pool from './dbConfig';
import dropTables from './migrations/v1/drop';
import createTables from './migrations/v1/create';
import seedTables from './seeds/v1/seed';

const queryMigrations = async () => {
  try {
    await pool.query(dropTables.membersTable);
    await pool.query(createTables.membersTable);
    // await pool.query(seedTables.membersTable);
  } catch (error) {
    console.log(error);
  }
};

queryMigrations();
