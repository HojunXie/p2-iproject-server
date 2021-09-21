const { Thread } = require('../models')

const authorize = async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    if (typeof id !== "number") {
      throw { name: "Invalid Type" }
    }
    const userId = req.user.id
    const threadId = id
    const thisThread = await Thread.findByPk(threadId)
    if (!thisThread) {
      throw {name: "not found"}
    }
    if (thisThread.userId !== userId) {
      throw {name: "Forbidden"}
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authorize