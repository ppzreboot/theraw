const db = require('../../../db/index')
const { show_loading, show_toast, redirect } = require('../../../fp/util')

Page({
  data: {
    address: null,
    formatted_name: null,
    formatted_tel: null,
    comments: '',
  },
  on_comments_input(evt) {
    this.setData({
      comments: evt.detail.value,
    })
  },
  choose_address() {
    wx.chooseAddress({
      success: address =>
        this.setData({
          address,
          formatted_name: address.userName.slice(0, 1)
            + Array(address.userName.length - 1).fill('x').join(''),
          formatted_tel: address.telNumber.slice(0, 3)
            + 'xxxx' + address.telNumber.slice(-4)
        })
    })
  },
  async submit_order() {
    const hide_loading = show_loading('提交订单')
    const id = await db.order.add({
      product_id: this.options.id,
      address: [this.data.address],
      comments: [this.data.comments],
    })
    hide_loading()
    show_toast('订单已提交')
    redirect('../order/list/index')
  },
})
