import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../app';
import {
  signupCredentials,
  signupCredentialsWithShortUsername,
  signupCredentialsWithoutEmail,
  userWithExistingEmail,
  loginDetails,
  loginDetailsWithWrongEmail,
  loginDetailsWithWrongPassword,
  loginDetailsWithoutEmail,
  loginDetailsWithoutPassword,
} from '../../db/mockdata/userdata';

// configure chai to use expect
chai.use(chaiHttp);
const { expect } = chai;

const signupUrl = '/api/v1/auth/register';
const loginUrl = '/api/v1/auth/login';

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

describe('User Authentication', () => {
  context('Authentication Sccess', () => {
    it('should authenticate a user successfully when valid input are supplied', async () => {
      const res = await chai
        .request(app)
        .post(loginUrl)
        .send(loginDetails);
      expect(res.status).to.equal(200);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('success');
      expect(res.body.message).to.eql('You have been logged in successfully');
      expect(res.body.data).to.have.all.keys('token', 'authenticatedUser');
      expect(res.body.data.token).to.not.eql('');
    });
  });

  context('Authenticate Failure', () => {
    it('should fail to authenticate a user when email is wrong', async () => {
      const res = await chai
        .request(app)
        .post(loginUrl)
        .send(loginDetailsWithWrongEmail);
      expect(res.status).to.equal(404);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('error');
      expect(res.body.message).to.eql(
        'This User does not exist please try registering',
      );
    });

    it('should fail to authenticate a user when password is wrong', async () => {
      const res = await chai
        .request(app)
        .post(loginUrl)
        .send(loginDetailsWithWrongPassword);
      expect(res.status).to.equal(400);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('error');
      expect(res.body.message).to.eql('Incorrect Password');
    });

    it('should fail to authenticate a user when email is not provided', async () => {
      const res = await chai
        .request(app)
        .post(loginUrl)
        .send(loginDetailsWithoutEmail);
      const { status, body } = res;
      expect(status).to.equal(422);
      expect(body)
        .to.have.property('message')
        .to.be.a('String');
      expect(body)
        .to.have.property('status')
        .to.eql('error');
      expect(body.message).to.eql('validation error');
      expect(body.errors[0]).to.contain('email');
    });

    it('should fail to authenticate a user when password is not provided', async () => {
      const res = await chai
        .request(app)
        .post(loginUrl)
        .send(loginDetailsWithoutPassword);
      const { status, body } = res;
      expect(status).to.equal(422);
      expect(body)
        .to.have.property('message')
        .to.be.a('String');
      expect(body)
        .to.have.property('status')
        .to.eql('error');
      expect(body.message).to.eql('validation error');
      expect(body.errors[0]).to.contain('password');
    });
  });
});
