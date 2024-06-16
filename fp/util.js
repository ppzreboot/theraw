exports.show_toast = (title, icon = 'none') =>
  wx.showToast({ title, icon })

exports.show_loading = (title = '加载中') => {
  wx.showLoading({ title })
  return wx.hideLoading
}

exports.generate_id = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    c => {
      const r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    },
  )

exports.nav_back = (delay = 1000) =>
  setTimeout(() =>
    wx.navigateBack()
  , delay)
exports.redirect = (url, delay = 1000) =>
  setTimeout(() =>
    wx.redirectTo({ url })
  , delay)
exports.nav2 = url =>
  wx.navigateTo({ url })

exports.choose_action = list =>
  new Promise(res => {
    wx.showActionSheet({
      itemList: list.map(item => item[0]),
      async success({ tapIndex }) {
        res(await list[tapIndex][1]())
      },
    })
  })

exports.next_tick = () =>
  new Promise(res => wx.nextTick(res))

exports.db_command = wx.cloud.database().command
