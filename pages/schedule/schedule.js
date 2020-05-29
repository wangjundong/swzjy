// pages/schedule/schedule.js
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
      chuqin: [],
      queqin: [],
      leave: [],
      today: 0
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
    var day = date.getDate();//得到日期
    let calendarConfig = this.data.calendarConfig;
    calendarConfig.today = day;
    console.log(day);
    this.setData({ currentMon: month, currentYear: year,calendarConfig:calendarConfig });
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

  }
})