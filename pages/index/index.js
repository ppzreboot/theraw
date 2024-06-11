const {
  all: get_all_products,
  insert: insert_product,
} = require('../../db/product.js')

Page({
  data: {
    userinfo: {
      name: 'PPz',
      year: 4,
    }
  },
  gogogo(event) {
    console.log('PPz, Go!')
    // 标签里的 data-* 可以在 event.target.dataset 中取到
    console.log(event.target.dataset.name)
  },
  go() {
    // https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html
    wx.navigateTo({
      url: '../anotherpage/index',
    })
  },
  onLoad() {
    console.log('loading')
  },
  async onReady() {
    // onLoad 和 onReady 是两个“生命周期毁掉函数”，其中 onReady 类似 Vue 里的 mounted
    console.log('page ready')

    await insert_product({
      name: '大连樱桃',
      time: new Date(),
    })
    console.log('all products', await get_all_products())
  },
})
