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
  on_tap_product(evt) {
    const id = evt.currentTarget.dataset.id
    choose_action([
      ['上下架', () => {
        console.log('上下架', id)
      }],
      ['编辑信息', () => {
        nav2('/pages/product/form/index?id=' + id)
      }],
      ['分享给朋友', () => {
        // TODO
      }],
      ['分享至朋友圈', () => {
        // TODO
      }],
    ])
  },
  async onShow() {
    await this.load()
  },
})
