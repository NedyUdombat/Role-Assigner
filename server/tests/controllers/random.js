import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

// config chai to use expect
chai.use(chaiHttp);
const { expect } = chai;

describe('Role Server', () => {
  it('random', done => {
    chai
      .request(app)
      .get('/api/v1/random')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('random');
        done();
      });
  });
});
