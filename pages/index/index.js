//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    navIndex:0,
    contentList:"",
    scrollTop:800
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changePages:function(evt){
    console.log(evt.detail.current);
    this.setData({
      navIndex:evt.detail.current
    });
  },
  changeContent:function(evt){
      console.log(evt.target.dataset.index);
      this.setData({
       navIndex:evt.target.dataset.index
      });
  },
  pullfresh:function(){
    console.log(1222);
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    }),
    wx.request({
      url: app.globalData.dataPath+"/api/list", //仅为示例，并非真实的接口地址
      data: {

      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          contentList:res.data.data
        });
      }
    })
  }
})
