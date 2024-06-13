const cloud = require('../../../fp/cloud/index')

Page({
  data: {
    id: null,
  },
  async load() {
    const res = await cloud.call.get_product(this.options.id)
    console.log({ res })
  },
  async onLoad() {
    await this.load()
  },
  onShow() {
  },
  onShareAppMessage() {

  },
})

    // choose_action([
    //   ['上下架', () => {
    //     console.log('上下架', id)
    //   }],
    //   ['编辑信息', () => {
    //     nav2('/pages/product/form/index?id=' + id)
    //   }],
    //   ['分享给朋友', () => {
    //     // TODO
    //   }],
    //   ['分享至朋友圈', () => {
    //     // TODO
    //   }],
    // ])