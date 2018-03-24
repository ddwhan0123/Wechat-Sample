Page({
  data: {
    loading: false,
    size: 0
  },
  scrollToRed: function (e) {
    this.setData({
      toView: 'green'
    })
  },
  scrollTo100: function (e) {
    console.log('---> size ' + this.data.size)
    this.setData({
      size: this.data.size + 100
    })
  },
  setLoading: function (e) {
    console.log('---> setLoading ' + this.data.loading)
    this.setData({
      loading: !this.data.loading
    })
  },

  upper: function (e) {
    console.log('--->upper 滚动到顶部')
  },
  lower: function (e) {
    console.log('--->lower 滚动到底部')
  },
  scroll: function (e) {
    console.log(' ---> 正在滚动')
  },
})
