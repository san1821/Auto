var express = require('express')
var path = require('path')
var pug = require('pug')

var apiMeta = require('./apiManifest')

var app = express();

var attactTestRoutes = require('./testRoutes')

/* Setting up views */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static('dist'))

attactTestRoutes(app)

app.get('/', function(req, res) {
  var state = { apiMeta: apiMeta }
  res.render('index', { state: JSON.stringify(state) })
})

app.listen(4000, ()=> {
  console.log("Server started at 4000")
})
