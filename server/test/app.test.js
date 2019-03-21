import { equal } from 'assert';
import { describe, it } from 'mocha';

describe('Basic Mocha String Test', () => {
  it('should return -1 when "Welcome" is missing', () => {
    equal(-1, 'Hello to Role Assigner'.indexOf('Welcome'));
  });

  it('should return number of characters in a string', () => {
    equal('Welcome'.length, 7);
  });

  it('should return first character of the string', () => {
    equal('Welcome'.charAt(0), 'W');
  });
});
