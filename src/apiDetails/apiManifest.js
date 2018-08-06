import home from '../apiFormat/home'
import tabList from '../apiFormat/tabList'
import homeBanner from '../apiFormat/homeBanner'
import homeSection from '../apiFormat/homeSection'
import MusicVideoDetailPage from '../apiFormat/MusicVideoDetailPage'
import tvshowDetailPage from '../apiFormat/tvshowDetailPage'

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
  cookies: "userId=123",
  json: homeBanner,
  method: 'GET'
},{
  id: 3,
  displayName: 'Home Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/1',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: homeSection,
  method: 'GET'
},{
  id: 4,
  displayName: 'Buzz Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/2',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: homeBanner,
  method: 'GET'
},{
  id: 5,
  displayName: 'Buzz Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/2',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: homeSection,
  method: 'GET'
},{
  id: 6,
  displayName: 'Music Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/3',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: homeBanner,
  method: 'GET'
},{
  id: 7,
  displayName: 'Music Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/3',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: homeSection,
  method: 'GET'
},{
  id: 8,
  displayName: 'Browse Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/4',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: homeBanner,
  method: 'GET'
},{
  id: 9,
  displayName: 'Browse Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/4',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: homeSection,
  method: 'GET'
},{
  id: 10,
  displayName: 'Shows Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/5',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: homeBanner,
  method: 'GET'
},{
  id: 11,
  displayName: 'Shows Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/5',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: homeSection,
  method: 'GET'
},{
  id: 12,
  displayName: 'Movie Banners',
  url: 'https://api.dev.mxplay.com/v1/home/banners/6',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: homeBanner,
  method: 'GET'
},{
  id: 13,
  displayName: 'Movie Sections',
  url: 'https://api.dev.mxplay.com/v1/home/tab/6',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: homeSection,
  method: 'GET'
},{
  id: 14,
  displayName: 'MusicDetailPage',
  url: 'https://api.dev.mxplay.com/v1/detail/video?type=music&id=09f3b8228d754fd3325b0a6584173120',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: MusicVideoDetailPage,
  method: 'GET'
},{
  id: 15,
  displayName: 'MovieDetailPage',
  url: 'https://api.dev.mxplay.com/v1/detail/video?type=movie&id=40b909b225b57496e6e1550ff7fe0e70',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: MusicVideoDetailPage,
  method: 'GET'
},{
  id: 16,
  displayName: 'ShortDetailPage',
  url: 'https://api.dev.mxplay.com/v1/detail/video?type=shorts&id=fcafb2e727325862e08b77f93345a122',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: MusicVideoDetailPage,
  method: 'GET'
},{
  id: 17,
  displayName: 'EpisodeDetailPage',
  url: 'https://api.dev.mxplay.com/v1/detail/video?type=episode&id=45bacdc37c8c025eb1644cf04657da86',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: MusicVideoDetailPage,
  method: 'GET'
},{
  id: 18,
  displayName: 'tvshowDetailPage',
  url: 'https://api.dev.mxplay.com/v1/detail/video?type=episode&id=45bacdc37c8c025eb1644cf04657da86',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: tvshowDetailPage,
  method: 'GET'
},{
  id: 19,
  displayName: 'seasonDetailPage',
  url: 'https://api.dev.mxplay.com/v1/detail/collection?type=season&id=bd4a04179ffee49c9bfa2bd46c01ae04',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: tvshowDetailPage,
  method: 'GET'
},{
  id: 20,
  displayName: 'albumDetailPage',
  url: 'https://api.dev.mxplay.com/v1/detail/collection?type=season&id=bd4a04179ffee49c9bfa2bd46c01ae04',
  cookies: "userId=123;platform=com.mxplay.mobile",
  json: tvshowDetailPage,
  method: 'GET'
}
]

module.exports = apis