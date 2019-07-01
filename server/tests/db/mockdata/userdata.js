import { hashPassword } from '../../../utils/helpers';

export const emptyUser = {
  username: '',
  email: '',
  fullName: '',
  password: '',
  passwordConfirmation: '',
};

export const userWithInvalidEmail = {
  username: 'janesmith',
  email: 'jsmith@com',
  password: 'hhrtuyhgty5t678',
};

export const userMissingEmail = {
  username: 'janesmith',
  email: '',
  password: 'hhrtuyhgty5t678',
};

export const userWithExistingEmail = {
  username: 'janesmithly',
  email: 'roleassigner@zinnia.com',
  password: 'hhrtuyhgty5t678',
};

export const wrongLoginEmail = {
  username: 'janesmithly',
  email: 'roleassignr@zinnia.com',
  password: 'hhrtuyhgty5t678',
};

export const userWithExistingUserName = {
  username: 'assigner',
  email: 'jsmith@gm.com',
  password: 'hhrtuyhgty5t678',
};

export const userWithUsernameNotAlphanum = {
  username: 'janesmit=---h',
  email: 'jsmith@gmail.com',
  password: 'hhrtuyhgty5t678',
};

export const userMissingUsername = {
  username: '',
  email: 'jsmith@gmail.com',
  password: 'hhrtuyhgty5t678',
};

export const userMissingPassword = {
  username: 'janesmith',
  email: 'jsmith@gmail.com',
  fullName: 'Igbomina Developer',
  password: '',
};

export const userWithPasswordLessThanSixChars = {
  username: 'j',
  email: 'jsmith@gmail.com',
  fullName: 'Igbomina Developer',
  password: 'pass',
};

export const signupCredentials = {
  email: 'roses@gmail.com',
  password: '16goingOn17',
  username: 'flowergarden',
};

export const signupCredentialsWithoutEmail = {
  password: '16goingOn17',
  username: 'flowergarden',
};

export const loginDetails = {
  id: '112345678',
  email: 'roleassigner@zinnia.com',
  password: 'theadmin',
};

export const loginDetailsWithWrongEmail = {
  email: 'roleassier@zinnia.com',
  password: 'theadmin',
};

export const loginDetailsWithWrongPassword = {
  email: 'roleassigner@zinnia.com',
  password: 'tadmin',
};

export const loginDetailsWithoutEmail = {
  password: 'theadmin',
};

export const loginDetailsWithoutPassword = {
  email: 'roleassigner@zinnia.com',
};

export const signupCredentialsWithShortUsername = {
  email: 'roses@gmail.com',
  password: '16goingOn17',
  username: 'fl',
};

export const team = {
  name: 'zinnia',
  members: [{ fullName: 'nedy udombat' }, { fullName: 'simi sola' }],
};

export const invalidTeamDatatype = {
  name: 'zinniah',
  members: { fullName: 'nedy udombat', fullName: 'simi sola' },
};
