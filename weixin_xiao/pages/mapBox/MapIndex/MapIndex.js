// pages/MapBox/MapBox.js
 
var app = getApp();
Page({
  data:{
    "latitude":'',
    "longitude":'',
    "userFace":'../../../image/14.png',
     "markers": [{
        iconPath: "../../../image/8.png",
        id: 0,
        latitude:39.90403,
        longitude:116.407526,
        width: 50,
        height: 50
    }],
    "controls": [{//放大境
      id: 1,
      iconPath: '../../../image/12.png',
      position: {
        left: 0,
        top: 0,
        width:65,
        height: 60
      },
      clickable: true
    }]
  }, 
  //放大镜
  controltap: function (e) {
    var _this=this;
    app.chooseLocation(function(res){
        //chooseLocation选择的位置
         var latChoose=res.latitude; 
         var longChoose=res.longitude;

         //当前定位getLocation
         var latCurrent=_this.data.latitude; 
         var longCurrent=_this.data.longitude;
         
         wx.navigateTo({
          url: '../gdMapBus/gdMapBus?latChoose='+latChoose+'&longChoose='+longChoose+'&latCurrent='+latCurrent+'&longCurrent='+longCurrent
        });
    });
  },
  onLoad:function(options){
    var _this=this;


    //用户信息 
   app.getUserInfo(function(userInf){
     var gender=userInf.gender;
     var url='';

     if(gender==1){//男
       url='../../../image/13.png';
     }else if(gender==2){//女
       url='../../../image/14.png';
     };

      _this.setData({
        userFace: url
      });
    })
    // 页面初始化 options为页面跳转所带来的参数
    app.getLocation(function(res){
      console.log(res,'定位成功啦')
      _this.setData({
         "latitude":res.latitude,
          "longitude":res.longitude,
        markers:[{
          latitude: res.latitude,
          longitude: res.longitude,
          iconPath: _this.data.userFace,
          id: 0,
          width: 50,
          height: 50
        }]
      });
    });
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
  }
})