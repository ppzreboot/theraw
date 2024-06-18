const { show_loading } = require('../../../../utils/index')
const buy = require('../../../../services/buy')

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
      list: await buy.retrieve_orders()
    })
    hide_loading()
  },
})
