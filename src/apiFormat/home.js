const videoURL = {
  url: {
    type: 'String'
  }
}

const streamObject = {
  dash: {
    type: 'Object',
    value: videoURL
  },
  hls: {
    type: 'Object',
    value: videoURL
  }
}

const contributorsItem = {
  name: {
    type: 'String'
  },
  type: {
    type: 'String'
  },
  role: {
    type: 'String'
  }
}

const sectionItem = {
  id: {
    type: 'String'
  },
  title: {
    type: 'String'
  },
  stream: {
    type: 'Object',
    value: streamObject
  },
  genre: {
    type: 'Array'
  },
  language: {
    type: 'Array'
  },
  contributors: {
    type: 'Array',
    value: contributorsItem
  },
  publisher: {
    type: 'Array'
  },
  container: {
    type: 'Object'
  },
  type: {
    type: 'String'
  }
}

const section = {
  style: {
    type: 'String',
    value: 'pic_left'
  },
  name: {
    type: 'String'
  },
  items: {
    type: 'Array',
    value: sectionItem
  }
}

export default {
  next: {
    type: 'String'
  },
  sections: {
    type: 'Array',
    value: section
  }
}
