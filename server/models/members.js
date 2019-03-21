

module.exports = (sequelize, DataTypes) => {
  const Members = sequelize.define('Members', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_team_lead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    past_team_lead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    current_qa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    past_qa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {});
  Members.associate = (models) => {
    Members.belongsTo(models.Teams, {
      foreignKey: 'teamsId',
      onDelete: 'CASCADE',
    });
  };
  return Members;
};
