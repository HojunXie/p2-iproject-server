const { Topic, User } = require('../models')

class TopicController {
  static async createTopic (req, res, next) {
    const newData = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      userId: req.user.id,
      movieId: req.body.movieId,
      movieType: req.body.movieType
    }
    try {
      const data = await Topic.create(newData)
      res.status(201).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async topicsByMovieId (req, res, next) {
    const id = Number(req.params.id)
    try {
      if (typeof id !== "number") {
        throw { name: "Invalid Type" }
      }
      const data = await Topic.findAll({
        where: {
          movieId: id,
          movieType: req.params.type
        },
        include: {
          model: User,
          attributes: { exclude: ['password'] }
        }
      })
      if (!data) {
        throw {name: "not found"}
      }
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async updateTopic (req, res, next) {
    const newData = {
      title: req.body.title,
      subtitle: req.body.subtitle,
    }
    const id = Number(req.params.id)
    try {
      if (typeof id !== "number") {
        throw { name: "Invalid Type" }
      }
      const data = await Topic.update(newData, {
        where: {
          id: id
        },
        returning: true
      })
      if (data[0] === 0) {
        throw {name: "not found"}
      }
      res.status(200).json(data[1][0])
    } catch (error) {
      next(error)
    }
  }
  static async deleteTopic (req, res, next) {
    const id = Number(req.params.id)
    try {
      if (typeof id !== "number") {
        throw {name: "Invalid Type" }
      }
      const data = await Topic.findByPk(id)
      if (!data) {
        throw {name: "not found"}
      }
      await Topic.destroy({
        where: {
          id: id
        }
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TopicController