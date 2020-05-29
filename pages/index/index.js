let app = getApp()

Page({
  data: {
    currentTab: 0,
    color: "#333333",
    selectedColor: "#333333",
    list: [{
      pagePath: "/index/index",
      iconPath: "/assets/icons/index.png",
      selectedIconPath: "/assets/icons/index_selected.png",
      text: "主页"
    }, {
      pagePath: "/index/center",
      iconPath: "/assets/icons/center.png",
      selectedIconPath: "/assets/icons/center_selected.png",
      text: "个人中心"
    }]
  },
  switchTab(e) {
    let that = this;
    if (this.data.currentTab === e.currentTarget.dataset.index) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.index
      })
    }
  },
  onLoad: function (option) {

  }
})
