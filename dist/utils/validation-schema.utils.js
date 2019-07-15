"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

/**
 * This is the schema definition
 * for a Article.
 */
var userSchema = _joi["default"].object().keys({
  fullName: _joi["default"].string().trim(),
  username: _joi["default"].string().alphanum().lowercase().trim().min(3).required(),
  email: _joi["default"].string().lowercase().trim().email({
    minDomainAtoms: 2
  }).required(),
  password: _joi["default"].string().alphanum().min(6).required()
}).options({
  stripUnknown: true
});

exports.userSchema = userSchema;