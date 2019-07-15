"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _helpers = require("./helpers");

/**
 * Input validator for a new user account
 * @param {Object} input - user input
 * @param {Object} schema - validation schema
 * @param {Object} res - Express response object
 * @param {Object} next - pass control to the next handler
 * @returns {Object} Error Response if validation fails
 */
var validator = function validator(input, schema, res, next) {
  var _Joi$validate = _joi["default"].validate(input, schema, {
    abortEarly: false,
    language: {
      key: '{{key}} '
    }
  }),
      error = _Joi$validate.error;

  if (error) {
    var validationError = error.details.map(function (errorItem) {
      return errorItem.message;
    });
    return (0, _helpers.errorResponse)(res, 422, 'validation error', validationError);
  }

  next();
};

var _default = validator;
exports["default"] = _default;