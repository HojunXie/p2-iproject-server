const { verify } = require('../helpers/JWT')
const { User } = require('../models')

const authen = async (req, res, next) => {
  const token = req.headers.access_token
  try {
    const payload = verify(token)
    const userData = await User.findOne({
      where: {
        email: payload.email
      }
    })
    if (!userData) {
      throw {name: "Invalid access"}
    }
    req.user = {
      id: userData.id,
      email: userData.email,
      username: userData.username
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authen