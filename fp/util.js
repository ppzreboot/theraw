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

exports.format_date = date => {
  if (!(date instanceof Date))
    date = new Date(date)
  const p = n => n > 9 ? n : '0' + n
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const h = date.getHours()
  const min = date.getMinutes()
  const s = date.getSeconds()
  return `${y}/${p(m)}/${p(d)} ${p(h)}:${p(min)}:${p(s)}`
}

exports.format_list_date = list =>
  list.forEach(item =>
    item.created_at = exports.format_date(item._created_at)
  )

exports.id_map = list => {
  const map = new Map()
  for (const item of list)
    map.set(item._id, item)
  return map
}
