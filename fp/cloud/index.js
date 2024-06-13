const { server_name } = require('../../const')

exports.call = new Proxy({}, {
  get: (_, route_name) =>
    async params => {
      const res = await wx.cloud.callFunction({
        name: server_name,
        data: { route_name, params },
      })
      return res.result
    }
})
