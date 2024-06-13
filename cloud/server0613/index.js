const cloud = require('wx-server-sdk')
cloud.init()

console.log('starting cloud function')

// router
const router = [
  require('./api/product'),
].reduce(
  (router, mod) => {
    for (const route_name in mod) {
      if (router[route_name])
        throw Error(`duplicated route_name: ${route_name}`)
      router[route_name] = mod[route_name]
    }
    return router
  },
  {},
)
console.log('routes', Object.keys(router))

exports.main = async (evt, ctx) => {
  const { params, route_name, userInfo } = evt
  console.debug(userInfo.openId, { route_name, params })

  const handle = router[route_name]
  if (!handle)
    return { code: 404 }
  try {
    return await handle(params, userInfo, ctx)
  } catch(err) {
    console.error(`error on ${route_name}`)
    console.error(err)
    return { code: 500 }
  }
}
