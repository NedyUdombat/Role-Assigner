"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkTeamExistence = exports.duplicateTeamValidation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _helpers = require("../../utils/helpers");

var duplicateTeamValidation =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var name, isDuplicate;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = req.body.name;
            _context.next = 3;
            return (0, _helpers.checkDuplicateTeam)(name);

          case 3:
            isDuplicate = _context.sent;

            if (!isDuplicate) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", (0, _helpers.errorResponse)(res, 409, 'Sorry, this team name has already been taken'));

          case 6:
            return _context.abrupt("return", next());

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function duplicateTeamValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.duplicateTeamValidation = duplicateTeamValidation;

var checkTeamExistence =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res, next) {
    var id;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return (0, _helpers.getTeamById)(id);

          case 3:
            req.team = _context2.sent;

            if (req.team) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", (0, _helpers.errorResponse)(res, 404, 'Team not found'));

          case 6:
            return _context2.abrupt("return", next());

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function checkTeamExistence(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.checkTeamExistence = checkTeamExistence;