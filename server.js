const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require("path");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

let port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('-------------------------> server conected, port: ', port, '!<---------------------------------------------------------')
})

