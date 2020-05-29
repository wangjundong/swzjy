// pages/huanke/huanke.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoPath: '',
    voicePath: '',
    start: false
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
  record: function(){
    let that = this;
    wx.chooseVideo({
      camera: 'front',
      sourceType: 'camera',
      maxDuration: 60,
      success: function(res){
        console.log(res);
        that.setData({ videoPath: res.tempFilePath });
      }
    })
  },
  startVoice: function(){
    let that = this;
     this.setData({ start: true });
     that.setData({ voicePath: 'https://swz-kid-voice.oss-cn-shenzhen.aliyuncs.com/Uploads/2019-08-13/5d52a97926296.mp3' });
     wx.startRecord({
       success: function(res){
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success: function (rs) {
          //持久路径 
          //本地文件存储的大小限制为 100M 
            var savedFilePath = rs.savedFilePath
            console.log("savedFilePath: " + savedFilePath)
            that.setData({ voicePath: 'https://swz-kid-voice.oss-cn-shenzhen.aliyuncs.com/Uploads/2019-08-13/5d52a97926296.mp3' });
          }
         })
       }
     });
  },
  endVoice: function(){
    let that = this;
    wx.stopRecord({
      success: function(res){
          console.log(res);
          console.log(that.data.voicePath);
          that.setData({ start: false });
      }
    });
  }
})