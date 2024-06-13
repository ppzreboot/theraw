const db = require('../../../db/index')
const { toast } = require('../../../fp/util')

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
  start_submit(evt) {
    if (this.data.photos.length == 0) {
      toast('请选择照片')
      return
    }
    const basic = evt.detail.value
    const errmsg = validate(basic)
    if (errmsg) {
      toast(errmsg)
      return
    }
    // 存
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
