const { Collection } = require('./db')

module.exports = {
  product: new Collection('product'),
  order: new Collection('oorder'),
}
