exports.Collection =
class Collection {
  #name
  constructor(name) {
    this.#name = name
  }
  #get() {
    return wx.cloud.database().collection(this.#name)
  }
  async add(data) {
    return await this.#get().add({ data })
  }
  async all() {
    const { data } = await this.#get().get()
    return data
  }
}
