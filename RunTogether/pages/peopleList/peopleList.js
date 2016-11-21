

Page({
  data:{
    list:[{
        name:'王某某',
        imageUrl: "http://news.xinhuanet.com/photo/2013-04/27/124638309_11n.jpg",
        runMeter:"1260KM",
        id:0,
        
    },{
        name:'都某某',
        imageUrl: "http://img5.iqilu.com/c/u/2014/0428/1398671698147.jpg",
        runMeter:"160KM",
        id:1,
    },{
        name:'某某某',
        imageUrl: "http://www.jiushixing.com/d/file/uploads/2013/allimg/130814/125-130Q4153929.jpg",
        runMeter:"500KM",
        id:2,
    },{
        name:'杨某',
        imageUrl: "http://www.phb123.com/uploads/allimg/150301/004R93F7-3.png",
        runMeter:"200KM",
        id:3,
    }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

  },
  onReady:function(){
    // 页面渲染完成

  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  
  },
  onUnload:function(){
    // 页面关闭
  
  },

  clickCell:function(item){
    wx.navigateTo({
      url: '../peopleDetail/peopleDetail?info=item',
      success: function(res){
        // success
      },

    })
  }
})