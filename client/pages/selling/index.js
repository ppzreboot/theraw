const db = require('../../db/index')
const { show_loading } = require('../../fp/util')

Page({
  data: {
    list: null,
  },
  async load() {
    const hide_loading = show_loading()
    this.setData({
      list: await db.product.all()
    })
    hide_loading()
  },
  async onShow() {
    await this.load()
  },
  async onPullDownRefresh() {
    await this.load()
  },
})
