"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateUserValidation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _helpers = require("../../utils/helpers");

var duplicateUserValidation =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, email, username, isDuplicate;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, username = _req$body.username;
            _context.next = 3;
            return (0, _helpers.checkDuplicateUser)(email, username);

          case 3:
            isDuplicate = _context.sent;

            if (!isDuplicate) {
              _context.next = 9;
              break;
            }

            if (!(isDuplicate.username === username)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", (0, _helpers.errorResponse)(res, 409, 'Sorry, this username has already been taken'));

          case 7:
            if (!(isDuplicate.email === email)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", (0, _helpers.errorResponse)(res, 409, 'Sorry, this email has already been taken'));

          case 9:
            return _context.abrupt("return", next());

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function duplicateUserValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.duplicateUserValidation = duplicateUserValidation;