const { Topic } = require('../models')

class TopicController {
  static async createTopic (req, res, next) {
    const newData = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      embed: req.body.embed,
      imgUrl: req.body.imgUrl,
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
          movieType: req.body.movieType
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
  static async deleteTopic (req, res, next) {
    const id = Number(req.params.id)
    try {
      if (typeof id !== "number") {
        throw {name: "Invalid Type" }
      }
      const data = await Topic.findByPk(id)
      if (!data) {
        throw {name: "Topic not found"}
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