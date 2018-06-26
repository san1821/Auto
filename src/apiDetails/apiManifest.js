import home from '../apiFormat/home'

var apis = [{
  id: 1,
  displayName: 'Home Page Section API',
  url: 'https://stub.mxplay.com/web/api/v0/home',
  params: {
    tab: 1
  },
  // json: home,
  method: 'GET'
}]

module.exports = apis