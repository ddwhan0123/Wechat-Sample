//获取应用实例
var app = getApp();
var register = require('../utils/refreshLoadRegister.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentSize: 0,
    words: []
  },
  created: function () {
    console.log('---> blog_list Component created');
    var _this = this;
    register.register(this);
    //获取words  
    this.doLoadData(0, 20);
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    doLoadData(currendSize, PAGE_SIZE) {
      wx.showLoading({
        title: 'loading...',
      });
      var that = this;
      setTimeout(function () {
        var length = currendSize + PAGE_SIZE;
        // console.log('currendSize:', currendSize);
        for (var i = currendSize; i < length; i++) {
          that.data.words.push('内容' + i);
        }
        var words = that.data.words;
        that.data.currentSize += PAGE_SIZE;
        that.setData({
          words: words
        });
        wx.hideLoading();
        register.loadFinish(that, true);
      }, 2000);
    },
    //模拟刷新数据
    refresh: function () {

      this.setData({
        words: [],
        currentSize: 0
      });
      this.doLoadData(0, 20);
    },
    //模拟加载更多数据
    loadMore: function () {
      this.doLoadData(this.data.currentSize, 20);
    }
  },
})
