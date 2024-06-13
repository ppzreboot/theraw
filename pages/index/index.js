const db = require('../../db/index')
const { choose_action } = require('../../fp/util')

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
      ['编辑', () => {
        console.log('editing', id)
      }],
    ])
  },
  async onShow() {
    await this.load()
  },
})
