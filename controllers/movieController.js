const movieBaseUrl = 'https://api.themoviedb.org/3'
const animeBaseUrl = 'https://api.aniapi.com'
const axios = require('axios')
const aniAPIKey = process.env.aniAPI
const movieAPIKey = process.env.movieAPI

class MovieController {
  static async getMovies (req, res, next) {
    try {
      const title = req.query.title ? req.query.title : ''
      const animeList = await axios.get(`${animeBaseUrl}/v1/anime`, {
        params: {
          title: title,
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
          query: title
        }
      })
      const tvLists = await axios.get(`${movieBaseUrl}/search/tv`, {
        params: {
          api_key: movieAPIKey,
          query: title
        }
      })
    } catch (error) {
      next(error)
    }
  }
  static async getMovieById (req, res, next) {
    try {
      const id = Number(req.params.id)
      if (typeof id !== "number") {
        throw { name: "Invalid Type" }
      }
      const getAnime = await axios.get(`${animeBaseUrl}/v1/anime/${id}`, {
        headers:  {
          Authorization: `Bearer ${aniAPIKey}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
      const getMovie = await axios.get(`${movieBaseUrl}/movie/${id}`, {
        params: {
          api_key: movieAPIKey,
        }
      })
      const getTv = await axios.get(`${movieBaseUrl}/tv/${id}`, {
        params: {
          api_key: movieAPIKey,
        }
      })
    } catch (error) {
      next(error)
    }
  }
  static async getPopular (req, res, next) {
    try {
      const popular = await axios.get(`${movieBaseUrl}/movie/popular`, {
        params: {
          api_key: movieAPIKey,
        }
      })
      res.status(200).json(popular)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = MovieController