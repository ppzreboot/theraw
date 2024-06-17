const { format_date } = require('../fp/util')

exports.Collection =
class Collection {
  #name
  constructor(name) {
    this.#name = name
  }
  #get() {
    return wx.cloud.database().collection(this.#name)
  }
  async get(id) {
    const { data } = await this.#get().doc(id).get()
    data.created_at = format_date(data._created_at)
    return data
  }

  async add(data) {
    data._created_at = new Date()
    const { _id } = await this.#get().add({ data })
    return _id
  }

  async all(where) {
    let query = this.#get()
    if (where)
      query = query.where(where)
    const { data } = await query.get()
    data.forEach(item => item.created_at = format_date(item._created_at))
    return data
  }
}
