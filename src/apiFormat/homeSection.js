const publisherItem = {
  imageUrl: {
    type: 'String'
  },
  name: {
    type: 'String'
  },
  videoCount: {
    type: 'Number'
  },
  id: {
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
  dash: {
    type: 'Object',
    value: dashItem
  },
  hls: {
    type: 'Object',
    value: hlsItem
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
  imageUrl: {
    type: 'String'
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
  id: {
    type: 'String'                              // add data
  },
  languages: {
    type: 'Array'                              // add data
  },
  genres: {
    type: 'Array'                              // add data
  }
  // container: {
  //   type: 'Object',
  //   value: containerItem                       // optional
  // }
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