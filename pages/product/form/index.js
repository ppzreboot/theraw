const db = require('../../../db/index')
const { show_toast, generate_id, show_loading, nav_back } = require('../../../fp/util')

Page({
  data: {
    photos: null, // [{ tempFilePath, size, fileType }]
  },
  new_photo(list) {
    this.setData({
      photos: (this.data.photos ?? [])
        .concat(list.detail)
    })
  },
  async start_submit(evt) {
    if (this.data.photos.length == 0) {
      show_toast('请选择照片')
      return
    }
    const basic = evt.detail.value
    const errmsg = validate(basic)
    if (errmsg) {
      show_toast(errmsg)
      return
    }

    // 存
    show_loading('上传图片...')
    const res = await Promise.all(this.data.photos.map(
      photo =>
        wx.cloud.uploadFile({
          cloudPath: generate_id() + '.' + photo.tempFilePath.split('.').at(-1),
          filePath: photo.tempFilePath,
        })
    ))
    const photo_ids = res.map(item => item.fileID)

    const hide_loading = show_loading('上传数据...')
    await db.product.add({
      photo_ids,
      ...basic,
    })

    hide_loading()
    show_toast('已上架')
    nav_back()
  },
  async onLoad() {
  },
})

function validate(basic_info) {
  const tmp_validate = (val, label) => {
    if (!val)
      throw '请填写' + label
    if (val.length > 8)
      throw label + '太长'
  }
  try {
    tmp_validate(basic_info.name, '产品名称')
    tmp_validate(basic_info.price, '价格')
    tmp_validate(basic_info.location, '产地')
    tmp_validate(basic_info.pick_at, '采摘时间')
    tmp_validate(basic_info.end_at, '下市时间')
    tmp_validate(basic_info.sum, '供货量')
  } catch(errmsg) {
    return errmsg
  }
}
