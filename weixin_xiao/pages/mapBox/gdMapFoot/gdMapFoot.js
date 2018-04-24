// pages/gdMap/gdMap.js

var amapFile = require('../../../libs/amap-wx.js');
var app = getApp();

Page({
  data: {
    markers: [{
      iconPath: "../../../image/start.png",
      id: 0,
      latitude: 39.989643,
      longitude: 116.481028,
      width: 32,
      height: 55
    },{
      iconPath: "../../../image/end.png",
      id: 0,
      latitude: 39.90816,
      longitude: 116.434446,
      width: 32,
      height: 55
    }],
    choosePositon:[], //选择的位置
    currentPosition:[], //当前位置
    includePoints:[],  //地图显示范围
    distance: '',    //距离 
    duration:'',    //时间
    cost: '',
    polyline: [] //指定路径坐标点
  },
  onLoad: function(res) {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({key: 'd7e330c3c19a40d3f75e9570bc503581'});
   //新选择的位置
    that.lat=res.latChoose;
    that.long=res.longChoose;

   //当前位置
    that.currentLat=res.latCurrent;
    that.currentLong=res.longCurrent;
    
    var start=that.currentLong+','+that.currentLat;
    var end=that.long+','+that.lat;
    console.log(start,end,'步行啦');

    that.setData({
      markers:[{ // start
          latitude: that.currentLat,
          longitude: that.currentLong,
          iconPath: "../../../image/start.png",
          width: 30,
          height: 52
      },{         //end
          latitude: that.lat,
          longitude: that.long,
          iconPath: "../../../image/end.png",
          width: 30,
          height: 52
      }],
      choosePositon:[that.long,that.lat],
      currentPosition:[that.currentLong,that.currentLat]
    });
    
    //步行
    myAmapFun.getWalkingRoute({
      origin: start, //出发地的经纬度坐标 '116.481028,39.989643'
      destination: end, //目的地的经纬度坐标 '116.434446,39.90816'
      success: function(data){
        var points = [];
        console.log(data,'步行返回数据')
        if(data.paths && data.paths[0] && data.paths[0].steps){
          var steps = data.paths[0].steps;
          for(var i = 0; i < steps.length; i++){
            var poLen = steps[i].polyline.split(';');
            for(var j = 0;j < poLen.length; j++){
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            } 
          }
        };
        console.log(points)
        that.setData({
          polyline: [{
            points: points,
            color: "#0091ff",
            width: 6
          }],
          includePoints:points
        });

        if(data.paths[0] && data.paths[0].distance){
          that.setData({
            distance: (data.paths[0].distance/1000).toFixed(1) + '公里'
          });
        };
        if(data.paths[0] && data.paths[0].duration){
          that.setData({
            duration: parseInt(data.paths[0].duration/60) + '分钟'
          });
        }

        if(data.taxi_cost){
          that.setData({
            cost: '打车约' + parseInt(data.taxi_cost) + '元'
          });
        }
          
      },
      fail: function(info){

      }
    });

  },
  //跳转详情页
  goDetail: function(){
    wx.navigateTo({
      url: '../navigation_car_detail/navigation'
    })
  },

  //公交
  goToBus: function (e) {
     var _this = this;

     var latChoose=_this.data.choosePositon[1];
     var longChoose=_this.data.choosePositon[0];

     var latCurrent=_this.data.currentPosition[1];
     var longCurrent=_this.data.currentPosition[0];

    wx.redirectTo({
       url: '../gdMapBus/gdMapBus?latChoose='+latChoose+'&longChoose='+longChoose+'&latCurrent='+latCurrent+'&longCurrent='+longCurrent
    })
  }
})