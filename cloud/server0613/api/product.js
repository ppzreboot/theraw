const db = require('../db/index')

exports.get_product = async id => {
  return db.product.get(id)
}
