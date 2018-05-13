var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Component({
  properties: {
    // 这里定义了tabs属性，属性值可以在组件使用时指定
    tabs: {
      type: [],
      value: ["PHOTO1", "BLOG1"],
    }
  },
  data: {
    // tabs: ["PHOTO", "BLOG"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  created: function () {
    console.log('--->navbar Component created')
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  methods: {
    // 这里是一个自定义方法
    tabClick: function (e) {
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
      });
    }
  }
});