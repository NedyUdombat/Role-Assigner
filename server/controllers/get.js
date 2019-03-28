import Members from '../database/query/index';
// import pool from '../database/dbConfig';

const { getCurrentTl, getCurrentQas, getAllTms } = Members;

class Get {
  static getTl(req, res) {
    getCurrentTl()
      .then(response => res.json({ response: response.rows[0] }))
      .catch(err => res.json({ err }));
  }

  static getQa(req, res) {
    getCurrentQas()
      .then((result) => {
        const uq = result.rows;
        res.json({
          uq,
        });
      })
      .catch(err => res.json({ err }));
  }

  static getAllTms(req, res) {
    getAllTms()
      .then(response => res.json({ response: response.rows }))
      .catch(err => res.json({ err }));
  }
}

export default Get;
