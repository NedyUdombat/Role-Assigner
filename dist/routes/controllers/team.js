"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTeam = exports.create = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _helpers = require("../../utils/helpers");

var _models = _interopRequireDefault(require("../../db/models"));

var Team = _models["default"].Team,
    Member = _models["default"].Member;

var create =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, members, id, teamName, teamMembers;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, members = _req$body.members;
            id = req.user.id;
            _context.prev = 2;
            _context.next = 5;
            return Team.create({
              name: name,
              userId: id
            });

          case 5:
            teamName = _context.sent;
            members.forEach(function (member) {
              return member.teamId = teamName.id;
            });
            _context.next = 9;
            return Member.bulkCreate(members, {
              returning: true
            });

          case 9:
            teamMembers = _context.sent;
            return _context.abrupt("return", (0, _helpers.successResponse)(res, 201, 'Team successfully created', {
              teamName: teamName,
              teamMembers: teamMembers
            }));

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", (0, _helpers.serverError)(res));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 13]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.create = create;

var getTeam =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var id, team;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return Team.findOne({
              where: {
                id: id
              },
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              },
              include: [{
                model: Member,
                as: 'members',
                attributes: {
                  exclude: ['createdAt', 'updatedAt']
                }
              }]
            });

          case 3:
            team = _context2.sent;
            return _context2.abrupt("return", (0, _helpers.successResponse)(res, 200, 'Team successfully retrieved', team));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getTeam(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTeam = getTeam;