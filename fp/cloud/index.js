const { server_name } = require('../../const')

exports.call = new Proxy({}, {
  get: (_, route_name) =>
    params =>
      wx.cloud.callFunction({
        name: server_name,
        data: { route_name, params },
      })
})