import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../app';
import {
  team,
  loginDetails,
  invalidTeamDatatype,
} from '../../db/mockdata/userdata';
import { generateToken } from '../../../utils/helpers';

// configure chai to use expect
chai.use(chaiHttp);
const { expect } = chai;

const createTeamUrl = '/api/v1/team/create';
const getTeamUrl = '/api/v1/team/1';
const fakeToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbBFpbCI6InJvbGVhc3NpZ25lckB6aW5uaWEuY29tIiwicGFzc3dvcmQiOiJ0aGVhZG1pbiIsImlhdCI6MTU2MTk5Nzk0NSwiZXhwIjoxNTY0NTg5OTQ1fQ.RGdNnS29hq9TTpBryKgP_khRgHMyy2Tfuo8MZ0VU-Oo';

describe('Team', () => {
  let userToken;
  context('Team Creation Success', () => {
    it('should create a team successfully', async () => {
      const res = await chai
        .request(app)
        .post(createTeamUrl)
        .set('x-access-token', await generateToken(loginDetails))
        .send(team);
      expect(res.status).to.equal(201);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('success');
      expect(res.body.message).to.eql('Team successfully created');
    });
  });

  context('Team Creation Failure', () => {
    it('should fail to create a team if invalid data type is provided', async () => {
      const res = await chai
        .request(app)
        .post(createTeamUrl)
        .set('x-access-token', await generateToken(loginDetails))
        .send(invalidTeamDatatype);
      expect(res.status).to.equal(500);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('error');
      expect(res.body.message).to.eql(
        'Your request could not be processed at this time. Kindly try again later.',
      );
    });

    it('should fail to create a team if a team already exists', async () => {
      const res = await chai
        .request(app)
        .post(createTeamUrl)
        .set('x-access-token', await generateToken(loginDetails))
        .send(team);
      expect(res.status).to.equal(409);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('error');
      expect(res.body.message).to.eql(
        'Sorry, this team name has already been taken',
      );
    });

    it('should fail to create a team if user is not authenticated', async () => {
      const res = await chai
        .request(app)
        .post(createTeamUrl)
        .send(team);
      expect(res.status).to.equal(401);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('error');
      expect(res.body.message).to.eql('Please provide a JWT token');
    });

    it('should fail to create a team if token is invalid', async () => {
      const res = await chai
        .request(app)
        .post(createTeamUrl)
        .set('authorization', fakeToken)
        .send(team);
      expect(res.status).to.equal(400);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('error');
      expect(res.body.message).to.eql(
        'Token is invalid, please provide a valid token',
      );
    });
  });

  context('Get Team Success', () => {
    it('should get a team successfully', async () => {
      const res = await chai
        .request(app)
        .get(getTeamUrl)
        .set('x-access-token', await generateToken(loginDetails))
        .send(team);
      expect(res.status).to.equal(200);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('success');
      expect(res.body.message).to.eql('Team successfully retrieved');
    });
  });

  context('Get Team Failure', () => {
    it('should not get a team if token is not provided', async () => {
      const res = await chai
        .request(app)
        .get(getTeamUrl)
        .send(team);
      expect(res.status).to.equal(401);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('error');
      expect(res.body.message).to.eql('Please provide a JWT token');
    });

    it('should not get a team if user is not authorized', async () => {
      const res = await chai
        .request(app)
        .get(getTeamUrl)
        .set('authorization', fakeToken)
        .send(team);
      expect(res.status).to.equal(400);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('error');
      expect(res.body.message).to.eql(
        'Token is invalid, please provide a valid token',
      );
    });

    it('should not get a team if team does not exist', async () => {
      const res = await chai
        .request(app)
        .get('/api/v1/team/0')
        .set('x-access-token', await generateToken(loginDetails))
        .send(team);
      expect(res.status).to.equal(404);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('error');
      expect(res.body.message).to.eql('Team not found');
    });
  });
});
