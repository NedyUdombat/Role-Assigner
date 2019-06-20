import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../app';
import {
  signupCredentials,
  signupCredentialsWithShortUsername,
  userWithExistingEmail,
} from '../../db/mockdata/userdata';

// configure chai to use expect
chai.use(chaiHttp);
const { expect } = chai;

const signupUrl = '/api/v1/auth/register';

describe('User registration', () => {
  let userToken;
  context('Register a user', () => {
    it('should create a user successfully when valid input are supplied', async () => {
      const res = await chai
        .request(app)
        .post(signupUrl)
        .send(signupCredentials);
      expect(res.status).to.equal(201);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('success');
      expect(res.body.message).to.eql(
        'Welcome your account has been succssfully created',
      );
      expect(res.body.data).to.have.all.keys('token');
      expect(res.body.data.token).to.not.eql('');
    });

    it('should should throw an error when username is less than 3 characters', async () => {
      const res = await chai
        .request(app)
        .post(signupUrl)
        .send(signupCredentialsWithShortUsername);
      expect(res.status).to.equal(422);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body.message).to.eql('validation error');
    });

    it('should should throw an error when username is the same', async () => {
      const res = await chai
        .request(app)
        .post(signupUrl)
        .send(signupCredentials);
      expect(res.status).to.equal(409);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body.message).to.eql(
        'Sorry, this username has already been taken',
      );
    });

    it('should should throw an error when email is the same', async () => {
      const res = await chai
        .request(app)
        .post(signupUrl)
        .send(userWithExistingEmail);
      expect(res.status).to.equal(409);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body.message).to.eql(
        'Sorry, this email has already been taken',
      );
    });
  });
});
