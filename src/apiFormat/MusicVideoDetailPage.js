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
    type: 'String'
  }
}

const StreamItem = {
  dash: {
    type: 'object',
    value: dashItem
  },
  hls: {
    type: 'object',
    value: hlsItem
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
    type: 'Number'  // need to add
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
  Stream: {
    type: 'object',
    value: StreamItem
  },
  sequence: {
    type: 'Number'
  },
  type: {
    type: 'String'
  },
  publisher: {
    type: 'object',
    value: publisherItem
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
    type: 'Array',
    // value: languagesItem
  },
  genres: {
    type: 'Array',
    // value: genresItem
  },
  image: {
    type: 'object',
    // value: imageItem
  },
  container: {
    type: 'object',
    value: containerItem
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