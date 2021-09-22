var express = require('express');
const movieRouter = require('./movieRoutes');
const threadRouter = require('./threadRoutes');
const topicRouter = require('./topicRoutes');
const userRouter = require('./userRoutes');
var router = express.Router();

router.use("/users", userRouter)
router.use("/topics", topicRouter)
router.use("/threads", threadRouter)
router.use("/movies", movieRouter)

module.exports = router;
