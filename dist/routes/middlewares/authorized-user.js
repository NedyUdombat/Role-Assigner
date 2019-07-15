"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkAuthorizedUser = checkAuthorizedUser;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _helpers = require("../../utils/helpers");

_dotenv["default"].config();
/**
 *
 *
 * @export
 * @param {object} req
 * @param {object} res
 * @param {void} next
 * @returns {void}
 */


function checkAuthorizedUser(_x, _x2, _x3) {
  return _checkAuthorizedUser.apply(this, arguments);
}

function _checkAuthorizedUser() {
  _checkAuthorizedUser = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers.authorization || req.headers['x-access-token'];

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", (0, _helpers.errorResponse)(res, 401, 'Please provide a JWT token'));

          case 4:
            _context.next = 6;
            return (0, _helpers.verifyToken)(token, process.env.SECRET_KEY);

          case 6:
            req.user = _context.sent;

            if (req.user) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", (0, _helpers.errorResponse)(res, 400, 'Token is invalid, please provide a valid token'));

          case 9:
            next();
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", (0, _helpers.errorResponse)(res, 400, _context.t0.message));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _checkAuthorizedUser.apply(this, arguments);
}