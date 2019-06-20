export default (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      unique: true,
      field: 'user_id',
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  });
  Team.associate = models => {
    // associations can be defined here
    Team.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'owner',
    });
    Team.hasMany(models.Member, {
      foreignKey: 'teamId',
      as: 'members',
    });
  };
  return Team;
};
