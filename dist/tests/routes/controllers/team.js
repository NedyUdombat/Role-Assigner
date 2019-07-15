"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../../../app"));

var _userdata = require("../../db/mockdata/userdata");

var _helpers = require("../../../utils/helpers");

// configure chai to use expect
_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
var createTeamUrl = '/api/v1/team/create';
var getTeamUrl = '/api/v1/team/1';
var fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbBFpbCI6InJvbGVhc3NpZ25lckB6aW5uaWEuY29tIiwicGFzc3dvcmQiOiJ0aGVhZG1pbiIsImlhdCI6MTU2MTk5Nzk0NSwiZXhwIjoxNTY0NTg5OTQ1fQ.RGdNnS29hq9TTpBryKgP_khRgHMyy2Tfuo8MZ0VU-Oo';
describe('Team', function () {
  var userToken;
  context('Team Creation Success', function () {
    it('should create a team successfully',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = _chai["default"].request(_app["default"]).post(createTeamUrl);
              _context.next = 3;
              return (0, _helpers.generateToken)(_userdata.loginDetails);

            case 3:
              _context.t1 = _context.sent;
              _context.t2 = _userdata.team;
              _context.next = 7;
              return _context.t0.set.call(_context.t0, 'x-access-token', _context.t1).send(_context.t2);

            case 7:
              res = _context.sent;
              expect(res.status).to.equal(201);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('success');
              expect(res.body.message).to.eql('Team successfully created');

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
  context('Team Creation Failure', function () {
    it('should fail to create a team if invalid data type is provided',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      var res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = _chai["default"].request(_app["default"]).post(createTeamUrl);
              _context2.next = 3;
              return (0, _helpers.generateToken)(_userdata.loginDetails);

            case 3:
              _context2.t1 = _context2.sent;
              _context2.t2 = _userdata.invalidTeamDatatype;
              _context2.next = 7;
              return _context2.t0.set.call(_context2.t0, 'x-access-token', _context2.t1).send(_context2.t2);

            case 7:
              res = _context2.sent;
              expect(res.status).to.equal(500);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('error');
              expect(res.body.message).to.eql('Your request could not be processed at this time. Kindly try again later.');

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('should fail to create a team if a team already exists',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      var res;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = _chai["default"].request(_app["default"]).post(createTeamUrl);
              _context3.next = 3;
              return (0, _helpers.generateToken)(_userdata.loginDetails);

            case 3:
              _context3.t1 = _context3.sent;
              _context3.t2 = _userdata.team;
              _context3.next = 7;
              return _context3.t0.set.call(_context3.t0, 'x-access-token', _context3.t1).send(_context3.t2);

            case 7:
              res = _context3.sent;
              expect(res.status).to.equal(409);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('error');
              expect(res.body.message).to.eql('Sorry, this team name has already been taken');

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    it('should fail to create a team if user is not authenticated',
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
              return _chai["default"].request(_app["default"]).post(createTeamUrl).send(_userdata.team);

            case 2:
              res = _context4.sent;
              expect(res.status).to.equal(401);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('error');
              expect(res.body.message).to.eql('Please provide a JWT token');

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
    it('should fail to create a team if token is invalid',
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
              return _chai["default"].request(_app["default"]).post(createTeamUrl).set('authorization', fakeToken).send(_userdata.team);

            case 2:
              res = _context5.sent;
              expect(res.status).to.equal(400);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('error');
              expect(res.body.message).to.eql('Token is invalid, please provide a valid token');

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  });
  context('Get Team Success', function () {
    it('should get a team successfully',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6() {
      var res;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.t0 = _chai["default"].request(_app["default"]).get(getTeamUrl);
              _context6.next = 3;
              return (0, _helpers.generateToken)(_userdata.loginDetails);

            case 3:
              _context6.t1 = _context6.sent;
              _context6.t2 = _userdata.team;
              _context6.next = 7;
              return _context6.t0.set.call(_context6.t0, 'x-access-token', _context6.t1).send(_context6.t2);

            case 7:
              res = _context6.sent;
              expect(res.status).to.equal(200);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('success');
              expect(res.body.message).to.eql('Team successfully retrieved');

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
  });
  context('Get Team Failure', function () {
    it('should not get a team if token is not provided',
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
              return _chai["default"].request(_app["default"]).get(getTeamUrl).send(_userdata.team);

            case 2:
              res = _context7.sent;
              expect(res.status).to.equal(401);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('error');
              expect(res.body.message).to.eql('Please provide a JWT token');

            case 7:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
    it('should not get a team if user is not authorized',
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
              return _chai["default"].request(_app["default"]).get(getTeamUrl).set('authorization', fakeToken).send(_userdata.team);

            case 2:
              res = _context8.sent;
              expect(res.status).to.equal(400);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('error');
              expect(res.body.message).to.eql('Token is invalid, please provide a valid token');

            case 7:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    })));
    it('should not get a team if team does not exist',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee9() {
      var res;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.t0 = _chai["default"].request(_app["default"]).get('/api/v1/team/0');
              _context9.next = 3;
              return (0, _helpers.generateToken)(_userdata.loginDetails);

            case 3:
              _context9.t1 = _context9.sent;
              _context9.t2 = _userdata.team;
              _context9.next = 7;
              return _context9.t0.set.call(_context9.t0, 'x-access-token', _context9.t1).send(_context9.t2);

            case 7:
              res = _context9.sent;
              expect(res.status).to.equal(404);
              expect(res.body).to.have.property('message').to.be.a('String');
              expect(res.body).to.have.property('status').to.eql('error');
              expect(res.body.message).to.eql('Team not found');

            case 12:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));
  });
});