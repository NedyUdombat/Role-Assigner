import chai from 'chai';

import { hashPassword, comparePassword } from '../../utils/helpers';

const { expect } = chai;

let hashedPassword;

describe('HELPERS MODULE', () => {
  context('Password Hashing', () => {
    it('should hash password successfully', async () => {
      try {
        hashedPassword = await hashPassword('password');
        expect(hashedPassword).to.be.an('string');
        expect(hashedPassword.length).to.be.gt(30);
      } catch (error) {
        throw error;
      }
    });
  });

  context('Password Comparison', () => {
    it('should compare password successfully', async () => {
      try {
        const isMatch = await comparePassword(hashedPassword, 'password');
        expect(isMatch).to.eql(true);
      } catch (error) {
        throw error;
      }
    });

    it('should compare password unsuccessfully', async () => {
      try {
        const isMatch = await comparePassword(hashedPassword, 'assword');
        expect(isMatch).to.eql(false);
      } catch (error) {
        throw error;
      }
    });
  });
});
