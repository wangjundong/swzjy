// pages/teacherList/teacherList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentItemId: 5,
    currentId: 6,
    teacherList: [
      {id:1,name:'郭万山',imgPath:'https://static.ynswzjy.cn/xcx/gws.png',avatar:'https://static.ynswzjy.cn/xcx/gws_avatar.png',title:['明星教师','云南艺术学院戏剧系表演专业  普通话一级乙等','云南省影视剧演员、话剧演员']},
      {id:2,name:'梅润雪',imgPath:'https://static.ynswzjy.cn/xcx/mrx.png',avatar:'https://static.ynswzjy.cn/xcx/mrx_avatar.png',title:['主任教师','中国传媒大学播音系 普通话一级乙等','云南广播电视台少儿频道首批节目主持人','云南广播电视台少儿频道 制片人','云南电视台少儿电视艺术团团长','全国少儿节目金童奖','云南省优秀节目一等奖']},
      {id:3,name:'莫梓清',imgPath:'https://static.ynswzjy.cn/xcx/mzq.png',avatar:'https://static.ynswzjy.cn/xcx/mzq_avatar.png',title:['主任教师','昆明理工大学播音与主持艺术专业 学士学位','普通话一级乙等','云南省朗诵学会会员','昆明市青少年语言文字科普基地主任教研员','曾任昆明艺术学院播音主持专业教师','昆明市呈贡区青年创业协会常务理事','昆明理工大学广播电视台常务副台长','昆明理工大学民航学院 外聘教师','中国花样少年语言艺术大赛少儿段金奖指导教师']},
      {id:4,name:'沈云帆',imgPath:'https://static.ynswzjy.cn/xcx/syf.png',avatar:'https://static.ynswzjy.cn/xcx/syf_avatar.png',title:['普通话一级乙等','吉林艺术学院大学本科','曾任职于北京东星演艺公司','曾出演电视剧《姥姥的饺子馆》、电影《八佰》以及大型话剧《屋外游花园》、《分手大师》、《日出》等']},
      {id:5,name:'石头哥哥',imgPath:'https://static.ynswzjy.cn/xcx/st.png',avatar:'https://static.ynswzjy.cn/xcx/st_avatar.png',title:['中国教育学会会员','儿童语言运用专家','中儿童技术协会会员','原云南广播电视台主持人','中国学前教育研究会会员','中国电视金鹰奖、星光奖获得者']},
      {id:6,name:'司雯丽',imgPath:'https://static.ynswzjy.cn/xcx/swl.png',avatar:'https://static.ynswzjy.cn/xcx/swl_avatar.png',title:['云南师范大学文理学院播音与主持艺术系普通话一级乙等','云南省朗诵协会会员','辅导多位学生获得国家级、省市级语言类比赛一等奖','中国花样少年语言艺术大赛少儿段金奖指导教师']},
      {id:7,name:'宋达',imgPath:'https://static.ynswzjy.cn/xcx/sd.png',avatar:'https://static.ynswzjy.cn/xcx/sd_avatar.png',title:['明星教师','云南艺术学院文华学院播音与主持艺术系','普通话一级乙等','云南省朗诵协会会员','曾任云南国际频道主持人、云南卫视彩云导视主持人','曾主持大型少儿真人秀节目《超级见闻家》 《童行视界》']},
      {id:8,name:'魏晨全',imgPath:'https://static.ynswzjy.cn/xcx/wcq.png',avatar:'https://static.ynswzjy.cn/xcx/wcq_avatar.png',title:['云南师范大学播音与主持艺术专业','普通话一级乙等','曾任云南师范大学主持人协会会长','中华才艺大赛云南赛区主持人比赛一等奖','香港国际艺术节云南赛区朗诵比赛一等奖']},
      {id:9,name:'温吴磊',imgPath:'https://static.ynswzjy.cn/xcx/wwl.png',avatar:'https://static.ynswzjy.cn/xcx/wwl_avatar.png',title:['山东艺术学院播音与主持专业学士学位','四川音乐学院电影电视配音学硕士学位','云南广播电视台配音员、外景主持人','曾参与中央电视台大型纪录片《甲午》配音','中央电视台315晚会动画配音']},
      {id:10,name:'肖楚容',imgPath:'https://static.ynswzjy.cn/xcx/xcr.png',avatar:'https://static.ynswzjy.cn/xcx/xcr_avatar.png',title:['主任教师','普通话一级乙等','云南艺术学院戏剧影视导表演理论研究生','上海戏剧学院“六视点”方法大师班理论研究员','原云南广播电视少儿艺术团主讲教师','云南艺术学院团委网络新媒体中心主任','云南艺术学院戏剧学院学生会主席','第五届中国花样少年语言艺术大赛金梧桐奖获得者']},
      {id:11,name:'杨飞',imgPath:'https://static.ynswzjy.cn/xcx/yf.png',avatar:'https://static.ynswzjy.cn/xcx/yf_avatar.png',title:['教学督导','毕业于华东师范大学','中国应用语言学专家','云南省朗诵学会副秘书长','云南省首批普通话测试员','国家级语言类比赛指导老师及评委','格式音规律及汉语拼音推演法被誉为“中国应用语言学”的黑马']},
      {id:12,name:'杨云娜',imgPath:'https://static.ynswzjy.cn/xcx/yyn.png',avatar:'https://static.ynswzjy.cn/xcx/yyn_avatar.png',title:['云南艺术学院播音主持专业','普通话一级乙等','云南省演艺公司签约演员','曾任澄江电视台记者','昆明广播电视台外景主持']},
      {id:13,name:'张十嘉',imgPath:'https://static.ynswzjy.cn/xcx/zsj.png',avatar:'https://static.ynswzjy.cn/xcx/zsj_avatar.png',title:['主任教师','声乐教育专业学士','新闻传媒专业学士','普通话一级甲等','中国纪录片工作委员会常任理事','玉溪电视台新闻评论节目主播兼制片人','院线电影融投人兼联合制片人']},
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
    let that = this;
    this.data.teacherList.map(function(dt,index){
        if(index==currentItemId){
          that.setData({ currentId: dt.id });
        }
    });
    console.log(this.data.currentId);
    this.setData({
      currentItemId:currentItemId
    })
  },
})