"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../../../app"));

var _userdata = require("../mockdata/userdata");

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
var endPoint = '/api/v1/auth/register';
describe('User', function () {
  describe('POST /api/v1/users', function () {
    before(function (done) {
      _chai["default"].request(_app["default"]).post(endPoint).send(_userdata.userWithExistingEmail).end(function () {
        done();
      });
    });
    it('returns a 422 response code an empty request body is sent by user',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var response;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _chai["default"].request(_app["default"]).post(endPoint).send(_userdata.emptyUser);

            case 2:
              response = _context.sent;
              expect(response.body).to.have.key('errors', 'status', 'message');
              expect(response.status).to.be.eql(422);
              expect(response.body.errors.length).to.be.greaterThan(0);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    it('returns an email field specific error message when email is not a valid email',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      var response;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _chai["default"].request(_app["default"]).post(endPoint).send(_userdata.userWithInvalidEmail);

            case 2:
              response = _context2.sent;
              expect(response.body).to.have.key('errors', 'status', 'message');
              expect(response.status).to.be.eql(422);
              expect(response.body.errors.length).to.be.greaterThan(0);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('returns specific error when email is missing from request',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      var response;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _chai["default"].request(_app["default"]).post(endPoint).send(_userdata.userMissingEmail);

            case 2:
              response = _context3.sent;
              expect(response.body).to.have.key('errors', 'status', 'message');
              expect(response.status).to.be.eql(422);
              expect(response.body.errors.length).to.be.greaterThan(0);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    it('returns specific error when username is missing from request',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4() {
      var response;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _chai["default"].request(_app["default"]).post(endPoint).send(_userdata.userMissingUsername);

            case 2:
              response = _context4.sent;
              expect(response.body).to.have.key('errors', 'status', 'message');
              expect(response.status).to.be.eql(422);
              expect(response.body.errors.length).to.be.greaterThan(0);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
    it('returns specific error when username is not valid alphanumerics',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5() {
      var response;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _chai["default"].request(_app["default"]).post(endPoint).send(_userdata.userWithUsernameNotAlphanum);

            case 2:
              response = _context5.sent;
              expect(response.body).to.have.key('errors', 'status', 'message');
              expect(response.status).to.be.eql(422);
              expect(response.body.errors.length).to.be.greaterThan(0);

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    it('returns specific error when password is missing from request',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6() {
      var response;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _chai["default"].request(_app["default"]).post(endPoint).send(_userdata.userMissingPassword);

            case 2:
              response = _context6.sent;
              expect(response.body).to.have.key('errors', 'status', 'message');
              expect(response.status).to.be.eql(422);
              expect(response.body.errors.length).to.be.greaterThan(0);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
    it('returns specific error when password is less than 6 characters',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee7() {
      var response;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _chai["default"].request(_app["default"]).post(endPoint).send(_userdata.userWithPasswordLessThanSixChars);

            case 2:
              response = _context7.sent;
              expect(response.body).to.have.key('errors', 'status', 'message');
              expect(response.status).to.be.eql(422);
              expect(response.body.errors.length).to.be.greaterThan(0);

            case 6:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
    it('does not allow for choosing existing email address',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee8() {
      var response;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _chai["default"].request(_app["default"]).post(endPoint).send(_userdata.userWithExistingEmail);

            case 2:
              response = _context8.sent;
              expect(response.body).to.have.key('status', 'message');
              expect(response.status).to.be.eql(409);
              expect(response.body.message).to.equal('Sorry, this email has already been taken');

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    })));
    it('does not allow for username duplication',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee9() {
      var response;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _chai["default"].request(_app["default"]).post(endPoint).send(_userdata.userWithExistingUserName);

            case 2:
              response = _context9.sent;
              expect(response.body).to.have.key('status', 'message');
              expect(response.status).to.be.eql(409);
              expect(response.body.message).to.equal('Sorry, this username has already been taken');

            case 6:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));
  });
});