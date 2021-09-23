const express = require('express')
const threadController = require('../controllers/threadController')
const authen = require('../middlewares/authentication')
const authz2 = require('../middlewares/authz2')
const imageKit = require('../middlewares/imagekit')
const upload = require('../middlewares/multer')
const threadRouter = express.Router()

threadRouter.get('/:id', threadController.ThreadsByTopicId)

threadRouter.use(authen)
threadRouter.post('/', upload.single("imgUrl"), imageKit, threadController.createThread)
threadRouter.put('/:id', authz2, threadController.updateThread)
threadRouter.delete('/:id', authz2, threadController.deleteThread)

module.exports = threadRouter