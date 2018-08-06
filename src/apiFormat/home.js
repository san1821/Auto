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
    type: 'Enum',
    possibleValues: ['pic_left', 'slide'],
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











// type: 'Enum',
// possibleValues: ['pic_left', 'slide'],
// type: 'Constant',
// expectedValue: 'slide'

//// import { abc, def, ghi } from './something'


// const types = [ 'Array', 'Object', 'String', 'Number', 'Constant', 'Enum' ]

// To implement
// Boolean, Array of Strings or Numbers