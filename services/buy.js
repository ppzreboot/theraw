const db = require('../db/index')
const { call } = require('../fp/cloud/index')
const { db_command } = require('../fp/util')

exports.retrieve_order = async function(id) {
  const order = await db.order.get(id)
  const product = await call.get_product(order.product_id)
  return { order, product }
}

exports.retrieve_orders = async function() {
  const orders = await db.order.all()
  const products = await db.product.all({
    _id: db_command.in(orders.map(o => o.product_id))
  })
  const map = new Map()
  for (const p of products)
    map.set(p._id, p)
  return orders.map(order => ({
    order,
    product: map.get(order.product_id),
  }))
}
