const axios = require('axios')
const FormData = require('form-data')

const imageKit = async (req, res, next) => {
  const APIKEY = Buffer.from(process.env.imgkitAPIKEY+":").toString("base64")
  const ftyperegex = /(\/jpg|\/jpeg|\/png)$/i
  try {
    if (!req.file) {
      req.body.imgUrl = undefined
      next()
    } else {
      if (!ftyperegex.exec(req.file.mimetype)) {
        throw {name: 'file type invalid'}
      }
      const form = new FormData()
      const file = req.file.buffer.toString("base64")
      form.append("file", file)
      form.append("fileName", req.file.originalname)
      const result = await axios({
        method: "POST",
        url: "https://upload.imagekit.io/api/v1/files/upload", 
        data: form, 
        headers: {
            ...form.getHeaders(), 
            Authorization: `Basic ${APIKEY}`
        }
      })
      if (!result) {
        throw {name: "uploadFail"}
      }
      req.body.imgUrl = result.data.url
      next()
    }
  } catch (error) {
    next(error)
  }
}

module.exports = imageKit