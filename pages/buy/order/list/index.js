const { show_loading } = require('../../../../fp/util')
const { retrieve_orders } = require('../../../../services/buy')

Page({
  data: {
    list: null,
  },
  async onShow() {
    await this.load()
  },
  async load() {
    const hide_loading = show_loading()
    this.setData({
      list: await retrieve_orders()
    })
    hide_loading()
  }
})
