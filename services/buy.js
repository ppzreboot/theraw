const db = require('../db/index')
const { call } = require('../fp/cloud')

exports.retrieve_order = async function(id) {
  const order = await db.order.get(id)
  const product = await call.get_product(order.product_id)
  return { order, product }
}
