var list = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']
Page({
  data: {
    toView: 'first',
    loading: false,
    size_left: 0,
    size_top: 0
  },
  scrollTo100left: function (e) {
    console.log('---> size_left ' + this.data.size_left)
    this.setData({
      size_left: this.data.size_left + 100,
      size_top: this.data.size_top + 50
    })
  },
  scrollTop: function (e) {
    this.setData({
      toView: list[1]
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
    this.setData({
      toView: list.length - 1
    })
  },
  scroll: function (e) {
    console.log(' ---> 正在滚动')
  },
})
