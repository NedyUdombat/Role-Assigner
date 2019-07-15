"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidTeamDatatype = exports.team = exports.signupCredentialsWithShortUsername = exports.loginDetailsWithoutPassword = exports.loginDetailsWithoutEmail = exports.loginDetailsWithWrongPassword = exports.loginDetailsWithWrongEmail = exports.loginDetails = exports.signupCredentialsWithoutEmail = exports.signupCredentials = exports.userWithPasswordLessThanSixChars = exports.userMissingPassword = exports.userMissingUsername = exports.userWithUsernameNotAlphanum = exports.userWithExistingUserName = exports.wrongLoginEmail = exports.userWithExistingEmail = exports.userMissingEmail = exports.userWithInvalidEmail = exports.emptyUser = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _helpers = require("../../../utils/helpers");

var emptyUser = {
  username: '',
  email: '',
  fullName: '',
  password: '',
  passwordConfirmation: ''
};
exports.emptyUser = emptyUser;
var userWithInvalidEmail = {
  username: 'janesmith',
  email: 'jsmith@com',
  password: 'hhrtuyhgty5t678'
};
exports.userWithInvalidEmail = userWithInvalidEmail;
var userMissingEmail = {
  username: 'janesmith',
  email: '',
  password: 'hhrtuyhgty5t678'
};
exports.userMissingEmail = userMissingEmail;
var userWithExistingEmail = {
  username: 'janesmithly',
  email: 'roleassigner@zinnia.com',
  password: 'hhrtuyhgty5t678'
};
exports.userWithExistingEmail = userWithExistingEmail;
var wrongLoginEmail = {
  username: 'janesmithly',
  email: 'roleassignr@zinnia.com',
  password: 'hhrtuyhgty5t678'
};
exports.wrongLoginEmail = wrongLoginEmail;
var userWithExistingUserName = {
  username: 'assigner',
  email: 'jsmith@gm.com',
  password: 'hhrtuyhgty5t678'
};
exports.userWithExistingUserName = userWithExistingUserName;
var userWithUsernameNotAlphanum = {
  username: 'janesmit=---h',
  email: 'jsmith@gmail.com',
  password: 'hhrtuyhgty5t678'
};
exports.userWithUsernameNotAlphanum = userWithUsernameNotAlphanum;
var userMissingUsername = {
  username: '',
  email: 'jsmith@gmail.com',
  password: 'hhrtuyhgty5t678'
};
exports.userMissingUsername = userMissingUsername;
var userMissingPassword = {
  username: 'janesmith',
  email: 'jsmith@gmail.com',
  fullName: 'Igbomina Developer',
  password: ''
};
exports.userMissingPassword = userMissingPassword;
var userWithPasswordLessThanSixChars = {
  username: 'j',
  email: 'jsmith@gmail.com',
  fullName: 'Igbomina Developer',
  password: 'pass'
};
exports.userWithPasswordLessThanSixChars = userWithPasswordLessThanSixChars;
var signupCredentials = {
  email: 'roses@gmail.com',
  password: '16goingOn17',
  username: 'flowergarden'
};
exports.signupCredentials = signupCredentials;
var signupCredentialsWithoutEmail = {
  password: '16goingOn17',
  username: 'flowergarden'
};
exports.signupCredentialsWithoutEmail = signupCredentialsWithoutEmail;
var loginDetails = {
  id: '112345678',
  email: 'roleassigner@zinnia.com',
  password: 'theadmin'
};
exports.loginDetails = loginDetails;
var loginDetailsWithWrongEmail = {
  email: 'roleassier@zinnia.com',
  password: 'theadmin'
};
exports.loginDetailsWithWrongEmail = loginDetailsWithWrongEmail;
var loginDetailsWithWrongPassword = {
  email: 'roleassigner@zinnia.com',
  password: 'tadmin'
};
exports.loginDetailsWithWrongPassword = loginDetailsWithWrongPassword;
var loginDetailsWithoutEmail = {
  password: 'theadmin'
};
exports.loginDetailsWithoutEmail = loginDetailsWithoutEmail;
var loginDetailsWithoutPassword = {
  email: 'roleassigner@zinnia.com'
};
exports.loginDetailsWithoutPassword = loginDetailsWithoutPassword;
var signupCredentialsWithShortUsername = {
  email: 'roses@gmail.com',
  password: '16goingOn17',
  username: 'fl'
};
exports.signupCredentialsWithShortUsername = signupCredentialsWithShortUsername;
var team = {
  name: 'zinnia',
  members: [{
    fullName: 'nedy udombat'
  }, {
    fullName: 'simi sola'
  }]
};
exports.team = team;
var invalidTeamDatatype = {
  name: 'zinniah',
  members: (0, _defineProperty2["default"])({
    fullName: 'nedy udombat'
  }, "fullName", 'simi sola')
};
exports.invalidTeamDatatype = invalidTeamDatatype;