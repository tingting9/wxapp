//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        },
        fail:function(res){
          console.log(res)
          typeof cb == "function" && cb(res)
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  //当前位置
  getLocation:function(cb){
     wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
          cb && cb(res); 
      }
    });
  },
  // 定位的初始位置，名称坐标地址等，实现一个自定义的位置展示
  openLocation:function(){
    wx.openLocation({
      latitude: arguments[0],
      longitude: arguments[1],
      scale: 10,
      name:arguments[2],
      address:arguments[3]
    });
  },
   //用于选择购物选择送货地址。返回的是选中的地址
  chooseLocation:function(cb){
    wx.chooseLocation({
      success:function(res){
        // console.log(res,'choose') 
        cb && cb(res)
      }
    });
  },
  //获取系统信息
  getSystemInfo:function(cb){
    var res = wx.getSystemInfoSync();
     cb && cb(res);
  }
})