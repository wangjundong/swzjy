// pages/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    calendarConfig: {
      // 配置内置主题
      theme: 'wjd',
      hideHeadOnWeekMode: true,  // 是否显示月份选择头部
      showLunar: false,          // 是否显示初一十五
      markToday: true,           // 是否显示今天
      chuqin: [10,13,14,17,19,20],
      queqin: [12,16,18],
      leave: [11,15]
    },
    currentMon: 1,
    currentYear: 2020
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date;
    var year = date.getFullYear(); 
    var month = date.getMonth() + 1; 
    this.setData({ currentMon: month, currentYear: year });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  go: function(e){
    let index = e.currentTarget.dataset.index;
    let url = "";
    if(index == 1)
      url = "/pages/signIn/signIn";
    else
      url = "/pages/leave/leave";
    wx.navigateTo({
      url: url
    })
  }
})