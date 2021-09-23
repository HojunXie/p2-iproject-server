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
      Topic.belongsTo(models.User, {foreignKey: 'userId'})
      Topic.hasMany(models.Thread, {foreignKey: 'topicId'})
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
    movieType: DataTypes.STRING 
}, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};