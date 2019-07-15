"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING,
        field: 'full_name'
      },
      teamId: {
        type: Sequelize.INTEGER,
        field: 'team_id'
      },
      current_team_lead: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      past_team_lead: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  down: function down(queryInterface) {
    return queryInterface.dropTable('Members');
  }
};
exports["default"] = _default;