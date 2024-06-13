const cloud = require('wx-server-sdk')

cloud.init()

exports.main = async (evt, ctx) => {
  const wx_ctx = cloud.getWXContext()
  return {
    evt,
    ctx,
    openid: wx_ctx.OPENID,
  }
}
