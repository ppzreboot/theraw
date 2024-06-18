const cloud = require('../../../utils/cloud/index')

Page({
  data: {
    order: null,
    product: null,
    address: null,
    comments: null,
  },
  async load() {
    const { order, product } = await cloud.call.retrieve_order(this.options.id)
    this.setData({
      order,
      product,
      address: order.address.at(-1),
      comments: order.comments.at(-1),
    })
  },
  async onShow() {
    await this.load()
  },
})
