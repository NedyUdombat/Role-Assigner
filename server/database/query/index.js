import pool from '../dbConfig';

class Members {
  static getTl() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM members where past_tl = false AND current_tl = false')
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

  static getCurrentTl() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM members where current_tl = true')
        .then(results => resolve(results))
        .catch(error => reject(error));
    });
  }

  static getCurrentQas() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM members where current_qa = true')
        .then(results => resolve(results))
        .catch(error => reject(error));
    });
  }

  static getAllTms() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM members')
        .then(results => resolve(results))
        .catch(error => reject(error));
    });
  }
}

export default Members;
