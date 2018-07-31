const imageItems = {
  '16x9': {
    type: 'String'
  }
}

const bannersItems = {
  subTitle: {
    type: 'String'
  },
  id: {
    type: 'String'
  },
  title: {
    type: 'String'
  },
  image: {
    type: 'Object',
    value: imageItems
  },
  type: {
    type: 'String'
  }
}

export default {
  banners: {
    type: 'Array',
    value: bannersItems
  }
}