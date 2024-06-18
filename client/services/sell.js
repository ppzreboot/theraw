const { call } = require('../fp/cloud/index')
const { id_map } = require('../fp/util')

exports.retrieve_order = async (reverse = true) => {
  const { products, orders } = await call.get_orders()
  for (const o of orders) {
    o.last_comments = o.comments.at(-1)
    o.last_address = o.address.at(-1)
  }

  const map = id_map(products)
  const list = orders.map(order => ({
    order,
    product: map.get(order.product_id),
  }))
  if (reverse)
    list.reverse()
  return list
}
