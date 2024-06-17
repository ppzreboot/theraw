const cloud = require('wx-server-sdk')

exports.db_command = cloud.database().command

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
