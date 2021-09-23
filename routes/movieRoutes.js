const express = require('express')
const MovieController = require('../controllers/movieController')
const movieRouter = express.Router()

movieRouter.get('/', MovieController.getMovies)
movieRouter.get('/popular', MovieController.getPopular)

module.exports = movieRouter