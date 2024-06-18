const { server_name } = require('../../const')

exports.call = new Proxy({}, {
  get: (_, route_name) =>
    async params => {
      const { result } = await wx.cloud.callFunction({
        name: server_name,
        data: { route_name, params },
      })
      if (result?.code)
        throw Error(`error on cloud.call ${route_name}`)
      return result
    }
})
