const express = require('express')
const TopicController = require('../controllers/topicController')
const authen = require('../middlewares/authen')
const authz = require('../middlewares/authz')
const imageKit = require('../middlewares/imagekit')
const upload = require('../middlewares/multer')
const topicRouter = express.Router()

topicRouter.get('/:id', TopicController.topicsByMovieId)

topicRouter.use(authen)
topicRouter.post('/', upload.single("imgUrl"), imageKit, TopicController.createTopic)
topicRouter.delete('/:id', authz, TopicController.deleteTopic)

module.exports = topicRouter