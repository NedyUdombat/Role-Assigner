"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _role = require("../controllers/role");

var _team = require("../middlewares/team");

var roleRouter = (0, _express.Router)();
roleRouter.get('/:id', _team.checkTeamExistence, _role.getTeamLead);
roleRouter.patch('/:id', _team.checkTeamExistence, _role.resetRoles);
var _default = roleRouter;
exports["default"] = _default;