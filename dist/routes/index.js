"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("./routes/auth"));

var _team = _interopRequireDefault(require("./routes/team"));

var _role = _interopRequireDefault(require("./routes/role"));

// destructure all middlewares(validators) here if any.
var router = (0, _express.Router)(); // general route

router.use('/auth', _auth["default"]);
router.use('/team', _team["default"]);
router.use('/team/role', _role["default"]);
var _default = router;
exports["default"] = _default;