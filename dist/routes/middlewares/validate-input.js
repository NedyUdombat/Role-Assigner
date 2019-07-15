"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateNewUser = void 0;

var _validator = _interopRequireDefault(require("../../utils/validator.utils"));

var _validationSchema = require("../../utils/validation-schema.utils");

/**
 * Input validator for a new user account
 * @param {Object} req - request body
 * @param {Object} res - response object
 * @param {Object} next - pass control to the next handler
 * @returns {Object} Validator helper function
 */
var validateNewUser = function validateNewUser(req, res, next) {
  (0, _validator["default"])(req.body, _validationSchema.userSchema, res, next);
};

exports.validateNewUser = validateNewUser;