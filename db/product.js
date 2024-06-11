const { collection } = require('./utils')

exports.all = async function() {
  const res = await collection('product').get()
  return res.data
}

exports.insert = async function(data) {
  const res = await collection('product').add({ data })
  console.log(`新数据 id: ${res._id}`)
}
