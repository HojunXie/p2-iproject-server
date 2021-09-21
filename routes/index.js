var express = require('express');
const userRouter = require('./userRoutes');
var router = express.Router();

router.use("/users", userRouter)

module.exports = router;
