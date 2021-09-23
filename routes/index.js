const express = require('express');
const movieRouter = require('./movieRoutes');
const threadRouter = require('./threadRoutes');
const topicRouter = require('./topicRoutes');
const userRouter = require('./userRoutes');
const errorHandler = require('../middlewares/errHandler')
const router = express.Router();

router.use("/users", userRouter)
router.use("/topics", topicRouter)
router.use("/threads", threadRouter)
router.use("/movies", movieRouter)

router.use(errorHandler)

module.exports = router;
