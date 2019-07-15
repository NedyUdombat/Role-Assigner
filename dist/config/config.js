"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

module.exports = {
  development: {
    use_env_variable: 'DATABASE_DEV_URL'
  },
  test: {
    use_env_variable: 'DATABASE_TEST_URL'
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
};