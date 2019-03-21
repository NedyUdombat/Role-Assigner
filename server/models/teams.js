

module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define('Teams', {
    id: DataTypes.INTEGER,
    team_name: DataTypes.STRING,
    duration: DataTypes.DATE,
  }, {});
  Teams.associate = function (models) {
    // associations can be defined here
  };
  return Teams;
};
