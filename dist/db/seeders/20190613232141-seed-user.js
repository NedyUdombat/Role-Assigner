"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _helpers = require("../../utils/helpers");

var _constants = require("../../utils/constants");

var _default = {
  up: function () {
    var _up = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(queryInterface) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = queryInterface;
              _context.t1 = _constants.ADMIN;
              _context.next = 4;
              return (0, _helpers.hashPassword)('theadmin');

            case 4:
              _context.t2 = _context.sent;
              _context.t3 = new Date();
              _context.t4 = new Date();
              _context.t5 = {
                id: '112345678',
                username: 'assigner',
                full_name: 'Role Assigner',
                email: 'roleassigner@zinnia.com',
                role: _context.t1,
                password: _context.t2,
                created_at: _context.t3,
                updated_at: _context.t4
              };
              _context.t6 = [_context.t5];
              _context.t7 = {};
              return _context.abrupt("return", _context.t0.bulkInsert.call(_context.t0, 'Users', _context.t6, _context.t7));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function up(_x) {
      return _up.apply(this, arguments);
    }

    return up;
  }(),
  down: function down(queryInterface) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
exports["default"] = _default;