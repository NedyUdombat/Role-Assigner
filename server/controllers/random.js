import Members from '../database/query/index';
import pool from '../database/dbConfig';

const { getTl, getQas } = Members;

const randomizer = (res) => {
  const phase1TM = res.rows;
  const teamLead = phase1TM[Math.floor(Math.random() * phase1TM.length)];
  pool.query('UPDATE members SET current_tl = false, past_tl = true where current_tl = true')
    .then(() => {
      pool.query(`UPDATE members SET current_tl = true WHERE id = ${teamLead.id}  returning *`)
        .then();
    });
};

class Randomizer {
  static teamLead() {
    getTl()
      .then((res) => {
        if (res.rowCount <= 1) {
          pool.query('UPDATE members SET past_tl = false WHERE past_tl = true returning *')
            .then((results) => {
              randomizer(results);
            });
        } else {
          randomizer(res);
        }
      });
  }

  static qa() {
    getQas()
      .then((res) => {
        const phase1QA = res.rows;
        const qaArray = [];
        pool.query('UPDATE members SET current_qa = false, past_qa = true where current_qa = true')
          .then(() => {
            for (let i = 0; i < 2; i += 1) {
              const qa = phase1QA[Math.floor(Math.random() * phase1QA.length)];
              const elementPosition = phase1QA.indexOf(qa);
              phase1QA.splice(elementPosition, 1);
              qaArray.push(qa);
              pool.query(`UPDATE members SET current_qa = true WHERE id = ${qa.id} returning *`)
                .then();
            }
          });
      });
  }
}

export default Randomizer;
