var axios = require('axios')
var apiMeta = require('../apiDetails')

function checkAPI (api) {
  var apiUrl = api.url
  var apiMethod = api.method
  return axios({
    url: apiUrl,
    method: (apiMethod || 'GET')
  }).then(function(response) {
    // JSON comparison
    console.log(response.data)
  })
}

function attactTestRoutes (app) {
  app.get('/run-tests', function(req, res) {
    // All Tests
    var apiPromiseArray = []
    for (var i = 0; i < apiMeta.length; i++) {
      var currentAPIPromise = checkAPI(apiMeta[i])
      apiPromiseArray.push(currentAPIPromise)
    }
    axios.all(apiPromiseArray).then(function() {
      res.end()      
    })
  })

  app.get('/run-test/:id', function(req, res) {
    // One particular test
    console.log('Running Test', req.params.id)
    res.end()
  })  
}

module.exports = attactTestRoutes