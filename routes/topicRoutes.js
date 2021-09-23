const express = require('express')
const TopicController = require('../controllers/topicController')
const authen = require('../middlewares/authen')
const authz = require('../middlewares/authz')
const imageKit = require('../middlewares/imagekit')
const upload = require('../middlewares/multer')
const topicRouter = express.Router()

topicRouter.get('/:type/:id', TopicController.topicsByMovieId)

topicRouter.use(authen)
topicRouter.post('/', upload.single("imgUrl"), imageKit, TopicController.createTopic)
topicRouter.put('/:id', authz, TopicController.updateTopic)
topicRouter.delete('/:id', authz, TopicController.deleteTopic)

module.exports = topicRouter