"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

// config chai to use expect
_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
describe('Role Server', function () {
  describe('GET /', function () {
    it('should respond with status code 200', function (done) {
      _chai["default"].request(_app["default"]).get('/').set('Accept', 'application/json').end(function (err, res) {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Welcome to Role Assigner!');
        done();
      });
    });
    it('should respond with status code 404 at /api/v1 if page does not exist', function (done) {
      _chai["default"].request(_app["default"]).get('/api/v1/y').set('Accept', 'application/json').end(function (err, res) {
        expect(res.status).to.equal(404);
        expect(res.body.message).to.eql('The page you are looking for does not exist');
        done();
      });
    });
  });
});