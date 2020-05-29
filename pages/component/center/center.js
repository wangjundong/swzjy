// pages/component/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      
  },
  pageLifetimes: {
    show(){
        console.log(wx.getStorageSync('who'));
        this.setId();
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    id: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    submit(e){
        let formData = e.detail.value;
        console.log(formData);
        wx.navigateTo({
          url: '/pages/menu/menu'
        })
    },
    setId: function(){
      this.setData({ id:wx.getStorageSync('who') });
    }
  }
})
