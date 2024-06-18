const cloud = require('wx-server-sdk')
const { format_date } = require('../utils')

exports.Collection =
class Collection {
  #name
  constructor(name) {
    this.#name = name
  }
  #get() {
    return cloud.database().collection(this.#name)
  }

  async update(id, data) {
    data._updated_at = new Date()
    await this.#get().doc(id).update({ data })
  }

  async all(where) {
    let query = this.#get()
    if (where)
      query = query.where(where)
    const { data } = await query.get()
    data.forEach(item => {
      item.created_at = format_date(item._created_at)
      if (item._updated_at)
        item.updated_at = format_date(item._updated_at)
    })
    return data
  }

  async get(id) {
    const { data } = await this.#get().doc(id).get()
    if (data) {
      data.created_at = format_date(data._created_at)
      if (data._updated_at)
        data.updated_at = format_date(data._updated_at)
    }
    return data
  }
}
