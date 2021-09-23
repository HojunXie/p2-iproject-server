const express = require('express')
const ThreadController = require('../controllers/threadController')
const authen = require('../middlewares/authen')
const authz2 = require('../middlewares/authz2')
const imageKit = require('../middlewares/imagekit')
const upload = require('../middlewares/multer')
const threadRouter = express.Router()

threadRouter.get('/:id', ThreadController.ThreadsByTopicId)

threadRouter.use(authen)
threadRouter.post('/', upload.single("imgUrl"), imageKit, ThreadController.createThread)
threadRouter.put('/:id', authz2, upload.single("imgUrl"), imageKit, ThreadController.updateThread)
threadRouter.delete('/:id', authz2, ThreadController.deleteThread)

module.exports = threadRouter