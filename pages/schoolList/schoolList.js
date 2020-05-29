// pages/schoolList/schoolList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schoolList: [
      {id:1,name:'北市校区',imgPath:'/assets/image/t1.png'},
      {id:2,name:'西站校区',imgPath:'/assets/image/t1.png'},
      {id:3,name:'广福校区',imgPath:'/assets/image/t1.png'},
    ],
    currentItemId:1
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
  swiperChange:function(e){
    var currentItemId = e.detail.currentItemId;
    console.log(currentItemId);
    this.setData({
      currentItemId:currentItemId
    })
  },
  clickChange: function(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/schoolDetail/schoolDetail?id=${id}`,
    })
  }
})