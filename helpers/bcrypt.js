const bcrypt = require('bcrypt')

const encrypt = (pass) => {
  return bcrypt.hashSync(pass, 10)
}

const compare = (pass, hash) => {
  return bcrypt.compareSync(pass, hash)
}

module.exports = { encrypt, compare }