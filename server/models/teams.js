

module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define('Teams', {
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {});
  Teams.associate = (models) => {
    Teams.hasMany(models.Members, {
      foreignKey: 'teamsId',
      as: 'members',
    });
  };
  return Teams;
};
