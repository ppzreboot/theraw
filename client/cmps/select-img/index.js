Component({
  methods: {
    async start_upload() {
      const { tempFiles } = await wx.chooseMedia({
        count: 6,
        mediaType: ['image'], // ['mix'],
        maxDuration: 30,
        sizeType: 'compressed',
      })
      this.triggerEvent('new-selected', tempFiles)
    }
  }
})
