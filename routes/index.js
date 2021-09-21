var express = require('express');
const threadRouter = require('./threadRoutes');
const topicRouter = require('./topicRoutes');
const userRouter = require('./userRoutes');
var router = express.Router();

router.use("/users", userRouter)
router.use("/topics", topicRouter)
router.use("/threads", threadRouter)

module.exports = router;
