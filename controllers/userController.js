const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')
const { generateToken } =  require('../helpers/JWT')

class UserController {
  static async register (req, res, next) {
    const newData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }
    try {
      const data = await User.create(newData)
      res.status(201).json({
        id: data.id,
        email: data.email,
        username: data.username
      })
    } catch (error) {
      next(error)
    }
  }
  static async login (req, res, next) {
    const input = {
      username: req.body.username,
      password: req.body.password
    }
    try {
      const userData = await User.findOne({
        where: {
          username: input.username
        }
      })
      if (userData) {
        if (compare(input.password, userData.password)) {
          res.status(200).json({access_token: generateToken(input)})
        } else {
          throw {name: "loginFail"}
        }
      } else {
        throw {name: "loginFail"}
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController