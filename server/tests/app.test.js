import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

// config chai to use expect
chai.use(chaiHttp);
const { expect } = chai;

describe('Role Server', () => {
  describe('GET /', () => {
    it('should respond with status code 200', done => {
      chai
        .request(app)
        .get('/')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.eql('Welcome to Role Assigner!');
          done();
        });
    });

    it('should respond with status code 404 at /api/v1 if page does not exist', done => {
      chai
        .request(app)
        .get('/api/v1/y')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.eql(
            'The page you are looking for does not exist',
          );
          done();
        });
    });
  });
});
