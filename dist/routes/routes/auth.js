"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _validateInput = require("../middlewares/validate-input");

var _auth = require("../controllers/auth");

var _auth2 = require("../middlewares/auth");

var authRouter = (0, _express.Router)();
authRouter.post('/register', _validateInput.validateNewUser, _auth2.duplicateUserValidation, _auth.register);
authRouter.post('/login', _auth.login);
var _default = authRouter;
exports["default"] = _default;