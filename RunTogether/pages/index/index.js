//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '寻找陪你跑步的人',
    userInfo: {},
    ohter: '有5个人想和你一起跑步',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../peopleList/peopleList'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo);
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
