var express = require('express')
var path = require('path')
var pug = require('pug')

var app = express();

/* Setting up views */
app.set('views', path.join(__dirname, 'views'))    // use pug extension
app.set('view engine', 'pug')

app.use(express.static('dist'))      // use dist/app.js for render

app.get('/*', function(req, res) {
  res.render('index')
})

app.listen(4000, ()=> {
  console.log("Server started at 4000")
})
