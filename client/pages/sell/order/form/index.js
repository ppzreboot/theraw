const { show_toast } = require('../../../../utils/index')
const cloud = require('../../../../utils/cloud/index')
const { order_status_options } = require('../../../../const')

Page({
  data: {
    status_options: order_status_options(),
    status_value: null,
  },
  onchange_status({ detail }) {
    this.setData({
      status_value: detail
    })
  },
  onShow() {

  },
  async ontap_submit() {
    const status = this.data.status_value
    if (!status) throw Error('unkown status')
    await cloud.call.update_order_status({
      id: this.options.id,
      status,
    })
    show_toast('已更新')
  },
})
