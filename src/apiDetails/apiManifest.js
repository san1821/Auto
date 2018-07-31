import home from '../apiFormat/home'
import tabList from '../apiFormat/tabList'
import homeBanner from '../apiFormat/homeBanner'
import homeSection from '../apiFormat/homeSection'
import buzzSection from '../apiFormat/buzzSection'
import buzzBanner from '../apiFormat/buzzBanner'
import MusicVideoDetailPage from '../apiFormat/MusicVideoDetailPage'
import browseSection from '../apiFormat/browseSection'


var apis = [{
  id: 1,
  displayName: 'List of Tabs',
  url: 'https://api.dev.mxplay.com/v1/home/tabs',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123;platform=com.mxplay.mobile",
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
  cookies: "userId=123"&&"platform=com.mxplay.mobile",
  json: browseSection,
  method: 'GET'
},{
  id: 4,
  displayName: 'Buzz Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/2',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123"&&"platform=com.mxplay.mobile",
  json: homeBanner,
  method: 'GET'
},{
  id: 5,
  displayName: 'Buzz Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/2',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123"&&"platform=com.mxplay.mobile",
  json: browseSection,
  method: 'GET'
},{
  id: 6,
  displayName: 'Music Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/3',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123"&&"platform=com.mxplay.mobile",
  json: homeBanner,
  method: 'GET'
},{
  id: 7,
  displayName: 'Music Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/3',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123"&&"platform=com.mxplay.mobile",
  json: browseSection,
  method: 'GET'
},{
  id: 8,
  displayName: 'Browse Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/4',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeBanner,
  method: 'GET'
},{
  id: 9,
  displayName: 'Browse Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/4',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: browseSection,
  method: 'GET'
},{
  id: 10,
  displayName: 'Shows Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/5',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeBanner,
  method: 'GET'
},{
  id: 11,
  displayName: 'Shows Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/5',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: browseSection,
  method: 'GET'
},{
  id: 12,
  displayName: 'Movie Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/6',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: homeBanner,
  method: 'GET'
},{
  id: 13,
  displayName: 'Movie Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/6',
  // params: {
  //   tab: 1
  // },
  cookies: "userId=123",
  json: browseSection,
  method: 'GET'
}
// ,{
//   id: 14,
//   displayName: 'VideoDetailPage',
//   url: 'https://api.dev.mxplay.com/v1/detail/video?type=music&id=09f3b8228d754fd3325b0a6584173120',
//   // params: {
//   //   tab: 1
//   // },
//   cookies: "userId=123",
//   json: MusicVideoDetailPage,
//   method: 'GET'
// }
]

module.exports = apis