const sell = require("../../services/sell")

Page({
  data: {
    list: null,
  },
  async load() {
    this.setData({
      list: await sell.retrieve_order()
    })
  },
  async onShow() {
    await this.load()
  },
})
