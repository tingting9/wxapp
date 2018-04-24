//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    "motto": 'Hello World',
    "indexText":"welcome",
    "userInfo":{},
    "contentT":''
  },
  onLoad: function () {
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
  },
  //获取火车票函数
  getTrainInfo: function() {
      wx.request({
          url: 'http://apis.baidu.com/qunar/qunar_train_service/s2ssearch',
          header: {
              apikey: 'kMC8B5fkkWSndEkxNnHFE-9jXFYQ6PbiPyyXT82ly_Y',
          },
          data: {
              version: '1.0',
              from: '北京',
              to: '杭州',
              date: '2016-11-15',
          },
          success: function(res) {
              var json = res.data;
              console.log(res)
              //将JSON类型转为String类型用以url参数传递，否则传递后会变成[object Object]
              // var jsonString = JSON.stringify(json);
              // wx.navigateTo({
              //     url: '../train/train?trainInfos='+jsonString,
              // });
          },
      });
  },
  getNumber: function(){
    wx.makePhoneCall({
      phoneNumber: '13910062670' //电话号码
    })
  },
  getCode:function(){
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res)
        contentT:res;
      }
    })

  
  }
  
})
