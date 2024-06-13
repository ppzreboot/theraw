exports.show_toast = (title, icon = 'none') =>
  wx.showToast({ title, icon })

exports.show_loading = title => {
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
