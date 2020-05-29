// pages/component/mine/mine.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      // 跳转页面
      go(e){
         console.log(e);
         let index = e.currentTarget.dataset.index;
         console.log(index);
         let url = "";
         if(index == 1){
          url = "/pages/schoolDesc/schoolDesc";
         }else if(index == 2){
          url = "/pages/teacherList/teacherList";
         }else{
          url = "/pages/activities/activities";
         }
         wx.navigateTo({
           url: url
         })   
      }
  }
})
