import chai from 'chai';

import { USER, ADMIN } from '../../utils/constants';

const { expect } = chai;

describe('CONSTANTS', () => {
  context('check constants content', () => {
    it('should equal USER', () => {
      expect(USER).to.eql('USER');
    });
  });
});
