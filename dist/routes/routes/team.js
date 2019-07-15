"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _team = require("../controllers/team");

var _authorizedUser = require("../middlewares/authorized-user");

var _team2 = require("../middlewares/team");

var teamRouter = (0, _express.Router)();
teamRouter.post('/create', _authorizedUser.checkAuthorizedUser, _team2.duplicateTeamValidation, _team.create);
teamRouter.get('/:id', _authorizedUser.checkAuthorizedUser, _team2.checkTeamExistence, _team.getTeam);
var _default = teamRouter;
exports["default"] = _default;