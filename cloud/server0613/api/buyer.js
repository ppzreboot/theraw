const db = require('../db/index')
const { db_command } = require('../utils')

exports.retrieve_products = async ids => {
  if (!(ids instanceof Array))
    throw Error('wrong type of params')
  return await db.product.all({
    _id: db_command.in(ids)
  })
}