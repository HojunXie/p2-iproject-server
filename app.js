var express = require('express');
var app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, () => {
  console.log("App is listening to ", port)
})