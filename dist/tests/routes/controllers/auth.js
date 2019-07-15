"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../../../app"));

var _userdata = require("../../db/mockdata/userdata");

// configure chai to use expect
_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
var signupUrl = '/api/v1/auth/register';
var loginUrl = '/api/v1/auth/login';
describe('User registration', function () {
  var userToken;
  context('Register a user', function () {
    it('should create a user successfully when valid input are supplied',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _chai["default"].request(_app["default"]).post(signupUrl).send(_userdata.signupCredentials);

            case 2:
              res = _context.sent;
              expect(res.status).to.equal(201);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('success');
              expect(res.body.message).to.eql('Welcome your account has been succssfully created');
              expect(res.body.data).to.have.all.keys('token');
              expect(res.body.data.token).to.not.eql('');

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    it('should should throw an error when username is less than 3 characters',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      var res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _chai["default"].request(_app["default"]).post(signupUrl).send(_userdata.signupCredentialsWithShortUsername);

            case 2:
              res = _context2.sent;
              expect(res.status).to.equal(422);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body.message).to.eql('validation error');

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('should should throw an error when username is the same',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      var res;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _chai["default"].request(_app["default"]).post(signupUrl).send(_userdata.signupCredentials);

            case 2:
              res = _context3.sent;
              expect(res.status).to.equal(409);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body.message).to.eql('Sorry, this username has already been taken');

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    it('should should throw an error when email is the same',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4() {
      var res;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _chai["default"].request(_app["default"]).post(signupUrl).send(_userdata.userWithExistingEmail);

            case 2:
              res = _context4.sent;
              expect(res.status).to.equal(409);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body.message).to.eql('Sorry, this email has already been taken');

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
});
describe('User Authentication', function () {
  context('Authentication Sccess', function () {
    it('should authenticate a user successfully when valid input are supplied',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5() {
      var res;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _chai["default"].request(_app["default"]).post(loginUrl).send(_userdata.loginDetails);

            case 2:
              res = _context5.sent;
              expect(res.status).to.equal(200);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('success');
              expect(res.body.message).to.eql('You have been logged in successfully');
              expect(res.body.data).to.have.all.keys('token', 'authenticatedUser');
              expect(res.body.data.token).to.not.eql('');

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  });
  context('Authenticate Failure', function () {
    it('should fail to authenticate a user when email is wrong',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6() {
      var res;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _chai["default"].request(_app["default"]).post(loginUrl).send(_userdata.loginDetailsWithWrongEmail);

            case 2:
              res = _context6.sent;
              expect(res.status).to.equal(404);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('error');
              expect(res.body.message).to.eql('This User does not exist please try registering');

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
    it('should fail to authenticate a user when password is wrong',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee7() {
      var res;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _chai["default"].request(_app["default"]).post(loginUrl).send(_userdata.loginDetailsWithWrongPassword);

            case 2:
              res = _context7.sent;
              expect(res.status).to.equal(400);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('error');
              expect(res.body.message).to.eql('Incorrect Password');

            case 7:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
    it('should fail to authenticate a user when email is not provided',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee8() {
      var res;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _chai["default"].request(_app["default"]).post(loginUrl).send(_userdata.loginDetailsWithoutEmail);

            case 2:
              res = _context8.sent;
              expect(res.status).to.equal(500);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('error');
              expect(res.body.message).to.eql('Your request could not be processed at this time. Kindly try again later.');

            case 7:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    })));
    it('should fail to authenticate a user when password is not provided',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee9() {
      var res;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _chai["default"].request(_app["default"]).post(loginUrl).send(_userdata.loginDetailsWithoutPassword);

            case 2:
              res = _context9.sent;
              expect(res.status).to.equal(500);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('error');
              expect(res.body.message).to.eql('Your request could not be processed at this time. Kindly try again later.');

            case 7:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));
  });
});