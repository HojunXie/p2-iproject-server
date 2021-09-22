const express = require('express');
const app = express();
const port = 3000
const router = require('./routes/index')
const errorHandler = require('./middlewares/errHandler')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log("App is listening to ", port)
})