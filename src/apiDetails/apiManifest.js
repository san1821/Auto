import home from '../apiFormat/home'
import tabList from '../apiFormat/tabList'
import homeBanner from '../apiFormat/homeBanner'
import homeSection from '../apiFormat/homeSection'
import buzzSection from '../apiFormat/buzzSection'
import buzzBanner from '../apiFormat/buzzBanner'

var apis = [{
  id: 1,
  displayName: 'List of Tabs',
  url: 'https://api.dev.mxplay.com/v1/home/tabs',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: tabList,
  method: 'GET'
},{
  id: 2,
  displayName: 'Home Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/1',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeBanner,
  method: 'GET'
},{
  id: 3,
  displayName: 'Home Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/1',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeSection,
  method: 'GET'
},{
  id: 4,
  displayName: 'Buzz Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/2',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeBanner,
  method: 'GET'
},{
  id: 5,
  displayName: 'Buzz Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/2',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeSection,
  method: 'GET'
},{
  id: 6,
  displayName: 'Music Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/3',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeBanner,
  method: 'GET'
},{
  id: 7,
  displayName: 'Music Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/3',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeSection,
  method: 'GET'
},{
  id: 6,
  displayName: 'Browse Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/4',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeBanner,
  method: 'GET'
},{
  id: 7,
  displayName: 'Browse Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/4',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeSection,
  method: 'GET'
},{
  id: 6,
  displayName: 'Shows Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/5',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeBanner,
  method: 'GET'
},{
  id: 7,
  displayName: 'Shows Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/5',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeSection,
  method: 'GET'
},{
  id: 6,
  displayName: 'Movie Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/6',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeBanner,
  method: 'GET'
},{
  id: 7,
  displayName: 'Movie Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/6',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeSection,
  method: 'GET'
}]

module.exports = apis