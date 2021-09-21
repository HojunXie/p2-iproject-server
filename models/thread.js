'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Thread.belongsTo(models.User)
      Thread.belongsTo(models.User)
    }
  };
  Thread.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Title can't be empty"
        },
        notNull: {
          msg: "Title can't be empty"
        }
      }
    },
    userId: DataTypes.INTEGER,
    topicId: DataTypes.INTEGER,
    content:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Content can't be empty"
        },
        notNull: {
          msg: "Content can't be empty"
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: "image format is invalid"
      }
    },
    embed: {
      type: DataTypes.STRING,
      validate: {
        isUrl: "url is invalid"
      }
    }
  }, {
    sequelize,
    modelName: 'Thread',
  });
  return Thread;
};