const { db_command } = require('../utils')
const db = require('../db/index')

exports.get_orders = async (_, user) => {
  // 找到自己的产品
  const products = await db.product.all({
    selling: true,
    _openid: user.openId,
  })
  // 全部订单
  const orders = await db.order.all({
    product_id: db_command.in(products.map(p => p._id))
  })

  return { products, orders }
}

exports.retrieve_order = async id => {
  const order = await db.order.get(id)
  const product = await db.product.get(order.product_id)
  return { order, product }
}

exports.update_order_status = async ({ id, status }) => {
  await db.order.update(id, { status })
}
