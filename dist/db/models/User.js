"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _default = function _default(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    fullName: {
      type: DataTypes.STRING,
      field: 'full_name'
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    hooks: {
      beforeCreate: function beforeCreate(user) {
        return user.password && user.hashPassword();
      }
    }
  });

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Team, {
      foreignKey: 'userId',
      as: 'teams'
    });
  };

  User.prototype.hashPassword =
  /*#__PURE__*/
  function () {
    var _hashPassword = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var salt;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              salt = 10;
              _context.next = 3;
              return _bcryptjs["default"].hash(this.password, salt);

            case 3:
              this.password = _context.sent;
              return _context.abrupt("return", this.password);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function hashPassword() {
      return _hashPassword.apply(this, arguments);
    }

    return hashPassword;
  }();

  return User;
};

exports["default"] = _default;