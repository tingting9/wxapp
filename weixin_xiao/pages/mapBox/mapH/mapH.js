// pages/mayHtml/mayHtml.js
var app = getApp();

Page({
 data:{
    latitude:39.99235,
    longitude:116.46898,
    markers: [{
        iconPath: "../../image/8.png",
        id: 0,
        latitude:39.99235,
        longitude:116.46898,
        width: 50,
        height: 50
    },{
        iconPath: "../../image/8.png",
        id: 0,
        latitude:39.98647,
        longitude:116.48103,
        width: 50,
        height: 50
    }],
    includePoints:[{
          latitude:39.99235,
        longitude:116.46898
      }, {
        latitude:39.98647,
        longitude:116.48103
    }],
    polyline: [{
      points: [{
          latitude:39.99235,
        longitude:116.46898
      }, {
        latitude:39.98647,
        longitude:116.48103
      }],
      color:"#FF0000DD",
      width: 2
    }]
    // controls: [{
    //   id: 1,
    //   iconPath: '../../image/8.png',
    //   position: {
    //     left: 0,
    //     top:0,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.mapCtx = wx.createMapContext('myMap');
    var info = wx.getSystemInfoSync();
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
  clickMap:function(){
    var _this=this;
    app.openLocation(39.9942433324465,116.49301662149564,'宝能中心','北京市朝阳区');
  },
  clickMapA:function(){
    app.chooseLocation();
  },
  getLocation:function(){
    app.getLocation(function(res){
      console.log(res,"getLocation")
    });
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.latitude,res.longitude);//获取当前地图中心经纬度
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation();
  }
})