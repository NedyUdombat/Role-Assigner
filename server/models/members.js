

module.exports = (sequelize, DataTypes) => {
  const Members = sequelize.define('Members', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    current_team_lead: DataTypes.BOOLEAN,
    past_team_lead: DataTypes.BOOLEAN,
    current_qa: DataTypes.BOOLEAN,
    past_qa: DataTypes.BOOLEAN,
  }, {});
  Members.associate = function (models) {
    // associations can be defined here
  };
  return Members;
};
