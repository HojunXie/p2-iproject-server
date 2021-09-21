const { Topic } = require('../models')

const authorize = async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    if (typeof id !== "number") {
      throw { name: "Invalid Type" }
    }
    const userId = req.user.id
    const topicId = id
    const thisTopic = await Topic.findByPk(topicId)
    if (!thisTopic) {
      throw {name: "not found"}
    }
    if (thisTopic.userId !== userId) {
      throw {name: "Forbidden"}
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authorize