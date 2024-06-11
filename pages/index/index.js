Page({
  data: {
    userinfo: {
      name: 'PPz',
      year: 4,
    }
  },
  gogogo(event) {
    console.log('PPz, Go!')
    // 标签里的 data-* 可以在 event.target.dataset 中取到
    console.log(event.target.dataset.name)
  },
  onLoad() {
    console.log('loading')
  },
  onReady() {
    // onLoad 和 onReady 是两个“生命周期毁掉函数”，其中 onReady 类似 Vue 里的 mounted
    console.log('page ready')
  },
})
