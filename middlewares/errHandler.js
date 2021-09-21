const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      const messages = []
      err.errors.forEach(element => {
        messages.push(element.message)
      });
      res.status(400).json({message: messages})
      break;
    case "not found":
      res.status(404).json({message: "Page not found!"})
      break;
    case "loginFail":
      res.status(401).json({message: "Username or Password is incorrect"})
      break;
    case "JsonWebTokenError":
      res.status(401).json({message: "Invalid JWT Token"})
      break;
    case "Forbidden":
      res.status(403).json({message: "Action not allowed"})
      break;
    case "Invalid Type!":
      res.status(400).json({message: "id must be a number"})
      break;
    default:
      console.log(err)
      res.status(500).json({message: "Internal Server Error"})
      break;
  }
}

module.exports = errorHandler