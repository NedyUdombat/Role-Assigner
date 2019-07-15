"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(sequelize, DataTypes) {
  var Member = sequelize.define('Member', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'full_name'
    },
    teamId: {
      type: DataTypes.INTEGER,
      field: 'team_id'
    },
    current_team_lead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    past_team_lead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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

  Member.associate = function (models) {
    // associations can be defined here
    Member.belongsTo(models.Team, {
      foreignKey: 'teamId',
      as: 'team'
    });
  };

  return Member;
};

exports["default"] = _default;