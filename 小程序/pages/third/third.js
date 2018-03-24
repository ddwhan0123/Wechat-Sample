Page({
  data: {
    loading: false,
    //滚动的数组
    scrolls: [
      {
        name: '黄色',
        tag: 'yellow',
      },
      {
        name: '绿色',
        tag: 'green',
      },
      {
        name: '红色',
        tag: 'red',
      },
      {
        name: '黄色',
        tag: 'yellow',
      },
      {
        name: '绿色',
        tag: 'green',
      },
      {
        name: '红色',
        tag: 'red',
      },
    ],

  },
  scrollToRed: function (e) {
    this.setData({
      toView: 'green'
    })
  },
  scrollTo100: function (e) {
    this.setData({
      scrollLeft: this.data.scrollLeft + 100
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
