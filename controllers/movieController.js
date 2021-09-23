const movieBaseUrl = 'https://api.themoviedb.org/3'
const animeBaseUrl = 'https://api.aniapi.com'
const axios = require('axios')
const aniAPIKey = process.env.aniAPI
const movieAPIKey = process.env.movieAPI

class MovieController {
  static async getMovies (req, res, next) {
    try {
      const title = req.query.title ? req.query.title : ''
      const page = req.query.page ? req.query.page : 1
      const tmdbPage = req.query.page > 1 ? Math.ceil(Number(req.query.page) / 2) : 1
      const animeLists = await axios.get(`${animeBaseUrl}/v1/anime`, {
        params: {
          title: title,
          page: page,
          per_page: 10
        },
        headers:  {
          Authorization: `Bearer ${aniAPIKey}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
      const movieLists = await axios.get(`${movieBaseUrl}/search/movie`, {
        params: {
          api_key: movieAPIKey,
          query: title,
          page: tmdbPage,
        }
      })
      const tvLists = await axios.get(`${movieBaseUrl}/search/tv`, {
        params: {
          api_key: movieAPIKey,
          query: title,
          page: tmdbPage
        }
      })
      const movie1 = movieLists.data.results.slice(0, 10)
      const movie2 = movieLists.data.results.slice(10)
      const tv1 = tvLists.data.results.slice(0, 10)
      const tv2 = tvLists.data.results.slice(10)
      let response = animeLists.data.data.documents
      if (!response) {
        response = []
      }
      if (Number(page) % 2 === 0) {
        response = response.concat(movie2).concat(tv2)
      } else {
        response = response.concat(movie1).concat(tv1)
      }
      res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
  static async getPopular (req, res, next) {
    try {
      const popular = await axios.get(`${movieBaseUrl}/movie/popular`, {
        params: {
          api_key: movieAPIKey,
          page: Math.ceil(Math.random()*10)
        }
      })
      const { data } = popular
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = MovieController