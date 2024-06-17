const cloud = require('wx-server-sdk')

exports.Collection =
class Collection {
  #name
  constructor(name) {
    this.#name = name
  }
  #get() {
    return cloud.database().collection(this.#name)
  }
  // async add(data) {
  //   return await this.#get().add({ data })
  // }
  async all(where) {
    let query = this.#get()
    if (where)
      query = query.where(where)
    const { data } = await query.get()
    return data
  }

  async get(id) {
    const { data } = await this.#get().doc(id).get()
    return data
  }
}
