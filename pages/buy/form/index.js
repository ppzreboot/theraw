Page({
  data: {
    address: null,
    formatted_tel: null,
  },
  choose_address() {
    wx.chooseAddress({
      success: address =>
        this.setData({
          address,
          formatted_tel: address.telNumber.slice(0, 3)
            + 'xxxx' + address.telNumber.slice(-4)
        })
    })
  }
})
