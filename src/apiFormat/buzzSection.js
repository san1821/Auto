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