Page({
  data: {
    name: 'PPz',
  },
  handle_input(event) {
    this.setData({
      name: event.detail.value
    })
  }
})
