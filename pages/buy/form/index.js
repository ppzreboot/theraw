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
  submit_order() {
    console.log(this.options, this.data.address, this.data.comments)
  },
})
