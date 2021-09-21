'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Username can't be empty"
        },
        notNull: {
          msg: "Username can't be empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Email can't be empty"
        },
        notNull: {
          msg: "Email can't be empty"
        },
        isEmail: {
          msg: "Email format is invalid"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password can't be empty"
        },
        notNull: {
          msg: "Password can't be empty"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};