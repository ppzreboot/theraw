const buy_service = require('../../../../services/buy')

Page({
  data: {
    order: null,
  },
  async onShow() {
    await this.load()
  },
  async load() {
    this.setData({
      data: await buy_service.retrieve_order(this.options.id)
    })
  }
})
