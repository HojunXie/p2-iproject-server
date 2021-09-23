const express = require('express')
const topicController = require('../controllers/topicController')
const authen = require('../middlewares/authentication')
const authz = require('../middlewares/authz')
const imageKit = require('../middlewares/imagekit')
const upload = require('../middlewares/multer')
const topicRouter = express.Router()

topicRouter.get('/', topicController.popularTopicList)
topicRouter.get('/:id', topicController.topicsByMovieId)

topicRouter.use(authen)
topicRouter.post('/', upload.single("imgUrl"), imageKit, topicController.createTopic)
topicRouter.put('/:id', authz, topicController.updateTopic)
topicRouter.delete('/:id', authz, topicController.deletetopic)

module.exports = topicRouter