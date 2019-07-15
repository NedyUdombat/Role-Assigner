"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pick = pick;
exports.excludeProperty = excludeProperty;
exports.verifyToken = exports.checkDuplicateTeam = exports.checkDuplicateUser = exports.serverError = exports.errorResponse = exports.successResponse = exports.getTeamById = exports.generateToken = exports.comparePassword = exports.getEligibleTeamMembers = exports.getFullTeamDetails = exports.hashPassword = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _sequelize = require("sequelize");

var _models = _interopRequireDefault(require("../db/models"));

var User = _models["default"].User,
    Team = _models["default"].Team,
    Member = _models["default"].Member;
var SECRET_KEY = process.env.SECRET_KEY;
/**
 *
 *
 * @export
 * @param {string} password
 * @param {number} [salt=10]
 * @returns {string} hash
 */

var hashPassword =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(password) {
    var salt,
        hash,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            salt = _args.length > 1 && _args[1] !== undefined ? _args[1] : 10;
            _context.next = 3;
            return _bcryptjs["default"].hash(password, salt);

          case 3:
            hash = _context.sent;
            return _context.abrupt("return", hash);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function hashPassword(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Get Full Team
 *
 * @param {String} id
 * @returns {Boolean} true if id exists
 * @returns {Boolean} false if id does not exist
 */


exports.hashPassword = hashPassword;

var getFullTeamDetails =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(id) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
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

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getFullTeamDetails(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Get Full Team
 *
 * @param {String} id
 * @returns {Boolean} true if id exists
 * @returns {Boolean} false if id does not exist
 */


exports.getFullTeamDetails = getFullTeamDetails;

var getEligibleTeamMembers =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(id) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Team.findOne({
              where: {
                id: id
              },
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              },
              include: [{
                model: Member,
                where: {
                  current_team_lead: false,
                  past_team_lead: false
                },
                as: 'members',
                attributes: {
                  exclude: ['createdAt', 'updatedAt']
                }
              }]
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getEligibleTeamMembers(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 *
 *
 * @export
 * @param {string} hashedPassword
 * @param {string} password
 * @returns {boolean} true/false
 */


exports.getEligibleTeamMembers = getEligibleTeamMembers;

var comparePassword =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(hashedPassword, password) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _bcryptjs["default"].compareSync(password, hashedPassword));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function comparePassword(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 *
 *
 * @export
 * @param {*} payload
 * @param {string} [expiresIn='30days']
 * @returns {string} token
 */


exports.comparePassword = comparePassword;

var generateToken =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(payload) {
    var expiresIn,
        _args5 = arguments;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            expiresIn = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : '30days';
            return _context5.abrupt("return", _jsonwebtoken["default"].sign(payload, SECRET_KEY, {
              expiresIn: expiresIn
            }));

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function generateToken(_x6) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 * Check Team existence
 *
 * @param {String} id
 * @returns {Boolean} true if id exists
 * @returns {Boolean} false if id does not exist
 */


exports.generateToken = generateToken;

var getTeamById =
/*#__PURE__*/
function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(id) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Team.findByPk(id);

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getTeamById(_x7) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 *
 * @param {object} res response object
 * @param {number} statusCode
 * @param {string} message
 * @param {*} data
 * @returns {object} res
 */


exports.getTeamById = getTeamById;

var successResponse = function successResponse(res, statusCode, message, data) {
  return res.status(statusCode).json({
    status: 'success',
    message: message,
    data: data
  });
};
/**
 *
 * @param {object} res response object
 * @param {number} statusCode
 * @param {string} message
 * @param {*} errors
 * @returns {object} res
 */


exports.successResponse = successResponse;

var errorResponse = function errorResponse(res, statusCode, message, errors) {
  return res.status(statusCode).json({
    status: 'error',
    message: message,
    errors: errors
  });
};
/**
 *
 * @param {object} res response object
 * @param {number} statusCode
 * @returns {object} res
 */


exports.errorResponse = errorResponse;

var serverError = function serverError(res) {
  var statusCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  return res.status(statusCode).json({
    status: 'error',
    message: 'Your request could not be processed at this time. Kindly try again later.'
  });
};
/**
 * Check User duplication
 *
 * @param {String} email
 * @param {String} username
 * @returns {Boolean} true if record exists
 * @returns {Boolean} false if record does not exist
 */


exports.serverError = serverError;

var checkDuplicateUser =
/*#__PURE__*/
function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(email, username) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return User.findOne({
              where: (0, _defineProperty2["default"])({}, _sequelize.Op.or, [{
                email: email
              }, {
                username: username
              }])
            });

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function checkDuplicateUser(_x8, _x9) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Check Team duplication
 *
 * @param {String} name
 * @returns {Boolean} true if record exists
 * @returns {Boolean} false if record does not exist
 */


exports.checkDuplicateUser = checkDuplicateUser;

var checkDuplicateTeam =
/*#__PURE__*/
function () {
  var _ref8 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(name) {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return Team.findOne({
              where: {
                name: name
              }
            });

          case 2:
            return _context8.abrupt("return", _context8.sent);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function checkDuplicateTeam(_x10) {
    return _ref8.apply(this, arguments);
  };
}();
/**
 *
 *
 * @param {object} obj
 * @param {array} keys
 * @returns {object} filteredObject
 */


exports.checkDuplicateTeam = checkDuplicateTeam;

function pick(obj, keys) {
  return keys.map(function (key) {
    return key in obj ? (0, _defineProperty2["default"])({}, key, obj[key]) : {};
  }).reduce(function (finalObject, arrayOfObjects) {
    return Object.assign(finalObject, arrayOfObjects);
  }, {});
}
/**
 *
 *
 * @param {object} obj
 * @param {array} keys
 * @returns {object} filteredObject
 */


function excludeProperty(obj, keys) {
  var filteredKeys = Object.keys(obj).filter(function (key) {
    return !keys.includes(key);
  });
  return pick(obj, filteredKeys);
}
/**
 *
 * @param {string} token
 * @returns {object/null} decoded tokens
 */


var verifyToken =
/*#__PURE__*/
function () {
  var _ref10 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee9(token) {
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _jsonwebtoken["default"].verify(token, SECRET_KEY, function (err, data) {
              if (err) {
                return null;
              }

              return data;
            });

          case 2:
            return _context9.abrupt("return", _context9.sent);

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function verifyToken(_x11) {
    return _ref10.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;