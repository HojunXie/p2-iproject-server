const { Thread, User } = require('../models')

class ThreadController {
  static async createThread (req, res, next) {
    const newData = {
      title: req.body.title,
      content: req.body.content,
      embed: req.body.embed,
      imgUrl: req.body.imgUrl,
      userId: req.user.id,
      topicId: req.body.topicId
    }
    try {
      const data = await Thread.create(newData)
      res.status(201).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async ThreadsByTopicId (req, res, next) {
    const id = Number(req.params.id)
    try {
      if (typeof id !== "number") {
        throw { name: "Invalid Type" }
      }
      const data = await Thread.findAll({
        where: {
          topicId: id,
          movieType: req.params.movieType
        },
        include: User
      })
      if (!data) {
        throw {name: "not found"}
      }
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async updateThread (req, res, next) {
    const newData = {
      title: req.body.title,
      content: req.body.content,
      embed: req.body.embed,
      imgUrl: req.body.imgUrl,
      userId: req.user.id,
      topicId: req.body.topicId
    }
    const id = Number(req.params.id)
    try {
      if (typeof id !== "number") {
        throw { name: "Invalid Type" }
      }
      const data = await Thread.update(newData, {
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
  static async deleteThread (req, res, next) {
    const id = Number(req.params.id)
    try {
      if (typeof id !== "number") {
        throw {name: "Invalid Type" }
      }
      const data = await Thread.findByPk(id)
      if (!data) {
        throw {name: "Thread not found"}
      }
      await Thread.destroy({
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

module.exports = ThreadController