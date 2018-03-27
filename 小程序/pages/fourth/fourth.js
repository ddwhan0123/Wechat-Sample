// pages/fourth/fourth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrays: [{ msg: 1 }, { msg: 2 }, { msg: 3 }, { msg: 4 }, { msg: 5 }, { msg: 6 }, { msg: 7 }, { msg: 8 }, { msg: 9 }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('---> fourth onLoad 在这里获取路由参数')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('---> fourth onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('---> fourth onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('---> fourth onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('---> fourth onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('---> fourth onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('---> fourth onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('---> fourth onShareAppMessage')
  }
})