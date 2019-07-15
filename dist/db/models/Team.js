"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(sequelize, DataTypes) {
  var Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    userId: {
      type: DataTypes.INTEGER,
      unique: true,
      field: 'user_id',
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  });

  Team.associate = function (models) {
    // associations can be defined here
    Team.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'owner'
    });
    Team.hasMany(models.Member, {
      foreignKey: 'teamId',
      as: 'members'
    });
  };

  return Team;
};

exports["default"] = _default;