'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'users',
    timestamps: true,
    paranoid: true
  })

  User.findByLogin = async (login, password) => {
    let user = await User.findOne({
      where: { username: login, password: password }
    });

    if (!user) {
      user = await User.findOne({
        where: { email: login, password: password }
      });
    }

    return user;
  };

  User.addHook("afterCreate", (instance) => {
    if (instance.context && instance.context.user) {
      console.log("A user was created by " + instance.context.user.id);
    }
  });

  return User
};
