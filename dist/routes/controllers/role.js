"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetRoles = exports.getTeamLead = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _helpers = require("../../utils/helpers");

var _models = _interopRequireDefault(require("../../db/models"));

var Member = _models["default"].Member;

var getTeamLead =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var id, team, members, teamLead, currentTL;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.params.id;
            _context.next = 4;
            return (0, _helpers.getEligibleTeamMembers)(id);

          case 4:
            team = _context.sent;

            if (team) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", (0, _helpers.errorResponse)(res, 404, 'There are no eligible teamleads, please click the rest button to strat again'));

          case 7:
            members = team.members;
            teamLead = members[Math.floor(Math.random() * members.length)];
            teamLead.current_team_lead = true;
            _context.next = 12;
            return Member.findOne({
              where: {
                current_team_lead: true,
                teamId: id
              }
            });

          case 12:
            currentTL = _context.sent;

            if (!currentTL) {
              _context.next = 16;
              break;
            }

            _context.next = 16;
            return Member.update({
              past_team_lead: true,
              current_team_lead: false
            }, {
              where: {
                id: currentTL.id
              }
            });

          case 16:
            _context.next = 18;
            return Member.update({
              current_team_lead: true
            }, {
              where: {
                id: teamLead.id
              }
            });

          case 18:
            return _context.abrupt("return", (0, _helpers.successResponse)(res, 200, 'TeamLead successfully retrieved', {
              teamLead: teamLead
            }));

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", (0, _helpers.serverError)(res));

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 21]]);
  }));

  return function getTeamLead(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTeamLead = getTeamLead;

var resetRoles =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var id, reset;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return Member.update({
              current_team_lead: false,
              past_team_lead: false
            }, {
              where: {
                teamId: id
              }
            }, {
              returning: true
            });

          case 4:
            reset = _context2.sent;
            return _context2.abrupt("return", (0, _helpers.successResponse)(res, 200, 'Team successfully reset', {
              reset: reset
            }));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", (0, _helpers.serverError)(res));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function resetRoles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.resetRoles = resetRoles;