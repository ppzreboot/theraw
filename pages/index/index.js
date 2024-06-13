const db = require('../../db/index')

Page({
  data: {
    list: null,
  },
  async load() {
    this.setData({
      list: await db.product.all()
    })
  },
  async onLoad() {
    await this.load()
  }
})
