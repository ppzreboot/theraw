// collection 类似于关系型数据库（如 MySQL 的 table）
exports.collection = name =>
  wx.cloud.database().collection(name)
