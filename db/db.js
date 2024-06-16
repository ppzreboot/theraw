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
    const { _id } = await this.#get().add({ data })
    return _id
  }
  async all() {
    const { data } = await this.#get().get()
    return data
  }
}
