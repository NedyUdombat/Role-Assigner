export default (sequelize, DataTypes) => {
  const Member = sequelize.define('Members', {
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
  });
  return Member;
};
