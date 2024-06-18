const cloud = require('../../../utils/cloud/index')

Page({
  data: {
    info: null,
    comments: null,
  },

  async load() {
    const data = await cloud.call.get_product(this.options.id)
    this.setData({
      info: data,
      comments: data.comments?.split('\n') || [],
    })
  },
  async onLoad() {
    await this.load()
  },
  onShow() {
  },
  onShareAppMessage() {
    return {
      title: this.info.name + ': ' + this.info.price,
      path: '/pages/product/info/index?id=' + this.options.id,
    }
  },
  onShareTimeline() {
    return {
      title: this.info.name + ': ' + this.info.price,
    }
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