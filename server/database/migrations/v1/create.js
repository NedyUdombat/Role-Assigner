const createTables = {
  membersTable: `CREATE TABLE IF NOT EXISTS members(
      id SERIAL PRIMARY KEY,
      name VARCHAR not null,
      current_tl BOOLEAN DEFAULT false,
      past_tl BOOLEAN DEFAULT false,
      current_qa BOOLEAN DEFAULT false,
      past_qa BOOLEAN DEFAULT false,
      created_on DATE DEFAULT NOW()
    )`,
};

export default createTables;
