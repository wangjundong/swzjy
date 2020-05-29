// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    if(index==1)
      url = "/pages/schedule/schedule";
    else if(index==2)
      url = "/pages/check/check";  
    else if(index==3)
      url = "/pages/huanke/huanke";  
    else if(index==4)
      url = "/pages/notification/notification";  
    else if(index==5)
      url = "/pages/feedback/feedback";  
    else if(index==6)
      url = "/pages/link/link";  
    wx.navigateTo({
      url: url
    })
  }
})