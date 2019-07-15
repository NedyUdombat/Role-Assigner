"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.register = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _helpers = require("../../utils/helpers");

var _models = _interopRequireDefault(require("../../db/models"));

var User = _models["default"].User;
/**
 * Create A User
 * @param {object} req
 * @param {object} res
 * @returns {object} user object
 */

var register =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var user, tokenPayload, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return User.create(req.body);

          case 3:
            user = _context.sent;
            tokenPayload = {
              id: user.id,
              username: user.username,
              email: user.email
            };
            _context.next = 7;
            return (0, _helpers.generateToken)(tokenPayload);

          case 7:
            token = _context.sent;
            return _context.abrupt("return", (0, _helpers.successResponse)(res, 201, 'Welcome your account has been succssfully created', {
              token: token
            }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", (0, _helpers.serverError)(res));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Create A User
 * @param {object} req
 * @param {object} res
 * @returns {object} user object
 */


exports.register = register;

var login =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, email, password, user, validPassword, token, userJSON, authenticatedUser;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context2.prev = 1;
            _context2.next = 4;
            return User.findOne({
              where: {
                email: email
              }
            });

          case 4:
            user = _context2.sent;

            if (!(user === null)) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", (0, _helpers.errorResponse)(res, 404, 'This User does not exist please try registering'));

          case 7:
            _context2.next = 9;
            return (0, _helpers.comparePassword)(user.password, password);

          case 9:
            validPassword = _context2.sent;

            if (validPassword) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return", (0, _helpers.errorResponse)(res, 400, 'Incorrect Password'));

          case 12:
            _context2.next = 14;
            return (0, _helpers.generateToken)({
              id: user.id,
              email: email
            });

          case 14:
            token = _context2.sent;
            userJSON = user.toJSON();
            authenticatedUser = (0, _helpers.excludeProperty)(userJSON, ['password']);
            return _context2.abrupt("return", (0, _helpers.successResponse)(res, 200, 'You have been logged in successfully', {
              authenticatedUser: authenticatedUser,
              token: token
            }));

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", (0, _helpers.serverError)(res));

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 20]]);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;