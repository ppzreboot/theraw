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
})
