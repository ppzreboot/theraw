const { choose_action } = require('../../../utils/index')
const sell = require('../../../services/sell')
const { order_status_map } = require('../../../const')

Page({
  data: {
    list: null,
    status_map: order_status_map(),
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
      ['订单详情', '../info/index?id=' + id],
      ['更新订单状态', '../form/index?id=' + id],
      ['复制收货地址', () => {
        wx.setClipboardData({
          data: `收件人: ${order.last_address.userName}
手机号码: ${order.last_address.telNumber}
所在地区: ${order.last_address.provinceName}${order.last_address.cityName}${order.last_address.countyName}
详细地址: ${order.last_address.detailInfo}`
        })
      }],
      ['拨打收货人电话', () => {
        wx.makePhoneCall({ phoneNumber: order.last_address.telNumber })
      }],
    ])
  },
})
