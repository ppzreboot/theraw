const { choose_action } = require("../../fp/util")
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

  ontap_order(evt) {
    const id = evt.currentTarget.dataset.id
    const { order, product } = this.data.list.find(item => item.order._id == id)
    choose_action([
      ['拨打收货人电话', () => {
        wx.makePhoneCall({ phoneNumber: order.last_address.telNumber })
      }],
      ['订单详情', '../info/index'],
      ['更新订单状态', '../form/index'],
    ])
  },
})
