'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Topic.belongsTo(models.User)
      Topic.hasMany(models.Thread)
    }
  };
  Topic.init({
    title:  {
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
    subtitle: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
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
    modelName: 'Topic',
  });
  return Topic;
};