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
  poster: {
    type: 'String'
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