// pages/signIn/signIn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hour: [],
    minute: [],
    currentHourItemId: 8,
    currentMinuteItemId: 0,
    currentOutHourItemId: 16,
    currentOutMinuteItemId: 0,
    signin: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let hour = [];
    let minute = [];
    for(let i=1;i<24;i++){
        hour.push(i);
    }
    for(let i=0;i<60;i++){
        minute.push(i);
    }
    this.setData({ hour: hour,minute:minute });
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
  swiperChange: function(e){
    var currentItemId = e.detail.currentItemId;
    console.log(e);
    let id = e.target.id;
    if(id=='hour'){
      this.setData({ currentHourItemId: currentItemId });
    }else if(id=='minute'){
      this.setData({ currentMinuteItemId: currentItemId });
    }else if(id=='outHour'){
      this.setData({ currentOutHourItemId: currentItemId });
    }else if(id=='outMinute'){
      this.setData({ currentOutMinuteItemId: currentItemId });
    }
  }
})