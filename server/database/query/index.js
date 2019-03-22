import pool from '../dbConfig';

class Members {
  static getAll() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM members where past_tl = false')
        .then(results => resolve(results))
        .catch(error => reject(error));
    });
  }

  static getQas() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM members where current_tl = false AND current_qa = false')
        .then(results => resolve(results))
        .catch(error => reject(error));
    });
  }
}

export default Members;
