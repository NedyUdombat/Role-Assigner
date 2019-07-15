"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _constants = require("../../utils/constants");

var expect = _chai["default"].expect;
describe('CONSTANTS', function () {
  context('check constants content', function () {
    it('should equal USER', function () {
      expect(_constants.USER).to.eql('USER');
    });
  });
});