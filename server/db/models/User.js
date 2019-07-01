import bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      fullName: {
        type: DataTypes.STRING,
        field: 'full_name',
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      hooks: {
        beforeCreate: user => user.password && user.hashPassword(),
      },
    },
  );
  User.associate = models => {
    // associations can be defined here
    User.hasMany(models.Team, {
      foreignKey: 'userId',
      as: 'teams',
    });
  };

  User.prototype.hashPassword = async function hashPassword() {
    const salt = 10;
    this.password = await bcrypt.hash(this.password, salt);
    return this.password;
  };
  return User;
};
