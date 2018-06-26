import home from '../apiFormat/home'

var apis = [{
  id: 1,
  displayName: 'Home page - List of Tabs',
  url: 'https://api.dev.mxplay.com/v1/home/tabs',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: home,
  method: 'GET'
},{
  id: 2,
  displayName: 'Home page - Home Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/1',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: home,
  method: 'GET'
},{
  id: 3,
  displayName: 'Home page - Home Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/1',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: home,
  method: 'GET'
},{
  id: 4,
  displayName: 'Home page - Buzz Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: home,
  method: 'GET'
},{
  id: 5,
  displayName: 'Home page - Buzz Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/2',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: home,
  method: 'GET'
},{
  id: 6,
  displayName: 'Home page - Shorts Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/3',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: home,
  method: 'GET'
},{
  id: 7,
  displayName: 'Home page - Shorts Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/3',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: home,
  method: 'GET'
}]

module.exports = apis