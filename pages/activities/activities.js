// pages/activities/activities.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentItemId: 1,
    activitiesList: [
      {id:1,title:'书丸子教育2018学年汇报演出迎新春晚会',desc:'把世界读给你听',imgPath:'https://static.ynswzjy.cn/xcx/family.png',url:'https://mp.weixin.qq.com/s/0zBsbCX0koyRrsO2h3_4Tw'},
      {id:2,title:'书丸子教育2018学年汇报演出迎新春晚会',desc:'把世界读给你听',imgPath:'https://static.ynswzjy.cn/xcx/world.png',url:'https://mp.weixin.qq.com/s/0zBsbCX0koyRrsO2h3_4Tw'},
      {id:3,title:'书丸子教育2018学年汇报演出迎新春晚会',desc:'把世界读给你听',imgPath:'https://static.ynswzjy.cn/xcx/hero.png',url:'https://mp.weixin.qq.com/s/0zBsbCX0koyRrsO2h3_4Tw'}
    ]
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
  }
})