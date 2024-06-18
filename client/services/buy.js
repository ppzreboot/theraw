const db = require('../db/index')
const { call } = require('../utils/cloud/index')
const { db_command } = require('../utils/index')

exports.retrieve_order = async function(id) {
  const order = await db.order.get(id)
  const product = await call.get_product(order.product_id)
  return { order, product }
}

exports.retrieve_orders = async function(reverse = true) {
  const orders = await db.order.all()
  for (const o of orders) { // 普通用户不需要知道历史记录
    o.comments = o.comments.at(-1) // 仅展示最新修改后的内容即可
    o.address = o.address.at(-1)
  }

  const products = await call.retrieve_products(orders.map(o => o.product_id))
  const map = new Map()
  for (const p of products)
    map.set(p._id, p)
  
  const list = orders.map(order => ({
    order,
    product: map.get(order.product_id),
  }))
  if (reverse)
    list.reverse()
  return list
}
