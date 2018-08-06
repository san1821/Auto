const imageItems = {
  '16x9': {
    type: 'String'
  },
  '1x1': {
    type: 'String'
  }
}

const seekThumbnailItems = {
  total: {
    type: 'String'
  },
  index: {
    type: 'String'
  },
  height: {
    type: 'String'
  },
  Interval: {
    type: 'String'
  },
  width: {
    type: 'String'
  },
  column: {
    type: 'String'
  },
  row: {
    type: 'String'
  },
  url: {
    type: 'String'
  },
  seekThumbnailImagePath: {
    type: 'String'
  },
  big_pic_num: {
    type: 'String'
  }
}


const contributorsItem = {
  name: {
    type: 'String'
  },
  role: {
    type: 'String'
  },
  type: {
    type: 'String'
  },
  id: {
    type: 'String'
  }
}

const tabsItems = {
  title: {
    type: 'String'
  },
  style: {
    type: 'String'
  },
  type: {
    type: 'String'
  },
  api: {
    type: 'String'
  },
  contributors: {
    type: 'String'
  }
}
const dashItem = {
  high: {
    type: 'String'
  },
  base: {
    type: 'String'
  },
  main: {
    type: 'String'
  }
}

const hlsItem = {
  high: {
    type: 'String'
  },
  base: {
    type: 'String'
  },
  main: {
    type: 'String'
  }
}

const containerItem = {
  title: {
    type: 'String'
  },
  type: {
    type: 'String'
  },
  sequence: {
    type: 'Number'
  },
  id: {
    type: 'String'
  },
  container: {
    type: 'Constant',
    value: 'Mxplay '

  }
}

const StreamItem = {
  provider: {
    type: 'String'
  },
  dash: {
    type: 'Object',
    value: dashItem
  },
  hls: {
    type: 'Object',
    value: hlsItem
  },
  youtube: {
    type: 'String'
  }
}

const publisherItem = {
  name: {
    type: 'String'
  },
  videoCount: {
    type: 'Number'
  },
  subscriptionsCount: {
    type: 'Number'
  },
  id: {
    type: 'String'
  },
  image: {
    type: 'Object',
    value: imageItems
  }
}


export default {
  duration: {
    type: 'Number'
  },
  title: {
    type: 'String'
  },


  publishTime:{
    type: 'Number'
  },

  stream: {
    type: 'Object',
    value: StreamItem
  },



  sequence: {
    type: 'Number'
  },
  type: {
    type: 'String'
  },
  publisher: {
    type: 'Object',
    value: publisherItem
  },
  childCount: {
    type: 'Number'
  },
  videoCount: {
    type: 'Number'
  },
  description: {
    type: 'String'
  },  
  rating: {
    type: 'String'
  },
  shareUrl: {
    type: 'String'
  },  
  downloadUrl: {
    type: 'String'
  },  
  id: {
    type: 'String'
  },
  languages: {
    type: 'Array'
    // value: languagesItem
  },
  genres: {
    type: 'Array'
    // value: genresItem
  },
  image: {
    type: 'Object',
    value: imageItems
  },
  container: {
    type: 'Object',
    value: containerItem
  },
  seekThumbnail: {
    type: 'Array',
    value: seekThumbnailItems
  },
  tabs: {
    type: 'Array',
    value: tabsItems
  },
  contributors: {
    type: 'Array',
    value: contributorsItem
  }
}