import Members from '../database/query/index';
import pool from '../database/dbConfig';

const { getAll, getQas } = Members;
let teamLead;
let newQaArray = [];
const eligibleTL = [];
const eligibleQas = [];
class Randomizer {
  static teamLead(req, res) {
    getAll()
      .then((response) => {
        // if (response.rowCount === 0 ) {
        //   pool.query('UPDATE members SET past_tl = false')
        //   .then()
        //   .catch()
        // }
        console.log(response.rowCount);
        // console.log(response.rows);
        response.rows.forEach((name) => {
          eligibleTL.push(name);
        });
        const newELigibleTLs = eligibleTL.filter(member => member.current_tl !== true);
        // for (let i = 0; i < 1; i += 1) {
        teamLead = newELigibleTLs[Math.floor(Math.random() * newELigibleTLs.length)];
        pool.query('UPDATE members SET current_tl = false, past_tl = true where current_tl = true')
          .then(() => {
            pool.query(`UPDATE members SET current_tl = true WHERE id = ${teamLead.id} returning *`)
              .then(results => console.log(results.rows[0]))
              .catch(err => console.log(err));
          });
        // }
        getQas()
          .then((qas) => {
            qas.rows.forEach((name) => {
              eligibleQas.push(name);
            });
            // console.log(`${eligibleQas}`);
            const newELigibleQas = eligibleQas.filter(member => member.current_tl !== true);
            for (let i = 0; i < 2; i += 1) {
              let qA = newELigibleQas[Math.floor(Math.random() * newELigibleQas.length)];
              let elementPosition = newELigibleQas.indexOf(qA);
              newELigibleQas.splice(elementPosition, 1);
              newQaArray.push(qA);
            }
            newQaArray.forEach((qa) => {
              pool.query('UPDATE members SET current_qa = false, past_qa = true where current_qa = true')
                .then(() => {
                  pool.query(`UPDATE members SET current_qa = true WHERE id = ${qa.id} returning *`)
                    .then(results => console.log(results.rows[0]))
                    .catch(err => console.log(err));
                });
            })
          });
      });
  }
}

export default Randomizer;
