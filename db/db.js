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
    return data
  }
}
