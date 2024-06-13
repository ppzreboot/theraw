const db = require('../../db/index')
const { choose_action, nav2 } = require('../../fp/util')

Page({
  data: {
    list: null,
  },
  async load() {
    this.setData({
      list: await db.product.all()
    })
  },
  async onShow() {
    await this.load()
  },
  async onPullDownRefresh() {
    await this.load()
  },
})
