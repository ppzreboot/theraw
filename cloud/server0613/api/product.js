const db = require('../db/index')

exports.get_product = async id => {
  return await db.product.get(id)
}
