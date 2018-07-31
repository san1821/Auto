const imageItems = {
  '16x9': {
    type: 'String'
  },
  '1x1': {
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
  }
  // container: {.            // optional
  //   type: ''
  // }
}

const dashItem = {
  // high: {
  //   type: ''
  // },
  // base: {
  //   type: ''
  // },
  main: {
    type: 'String'
  }
}

const hlsItem = {
  // high: {
  //   type: ''
  // },
  // base: {
  //   type: ''
  // },
  main: {
    type: 'String'
  }
}


const streamItem = {
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

const itemsItem = {
  duration: {
    type: 'Number'
  },
  title: {
    type: 'String'
  },
  publishTime: {
    type: 'Number'
  },
  stream: {
    type: 'Object',
    value: streamItem
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
  id: {
    type: 'String'                              // add data
  },
  languages: {
    type: 'Array'                              // add data
  },
  genres: {
    type: 'Array'                              // add data
  },
  image: {
    type: 'Object',
    value: imageItems
  },
  container: {
    type: 'Object',
    value: containerItem                       // optional
  },
  contributors: {
    type: 'Array'                             // Add data
  }
}


const sectionsItems = {
  id: {
    type: 'String'
  },
  style: {
    type: 'String'
  },
  items: {
    type: 'Array',
    value: itemsItem
  },
  next: {
    type: 'String'
  },
  name: {
    type: 'String'
  }
}

export default {
  next: {
    type: 'String'
  },
  sections: {
    type: 'Array',
    value: sectionsItems
  }
}