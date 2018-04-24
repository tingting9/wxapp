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
    choosePositon:[],   //选择的位置
    currentPosition:[], //当前位置
    includePoints:[],   //地图显示范围
    transits:'',        //多条路线
    taxiCost: '',       //打车
    polyline: '',       //指定路径坐标点
    ALLInfor:[]        //btn 时间公里 
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
    // console.log(start,end,'步行啦');
   //116.407526,39.90403 116.43445,39.9415 步行啦

   //测试
    // that.lat=39.9415;
    // that.long=116.43445;
    // that.currentLat=39.90403;
    // that.currentLong=116.407526;

    var start=that.currentLong+','+that.currentLat;
    var end=that.long+','+that.lat;


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
    
    //bus
    myAmapFun.getTransitRoute({
      origin: start, //出发地的经纬度坐标 
      destination: end, //目的地的经纬度坐标
      city: '北京',
      success: function(data){
        console.log(data,'全部')
        var taxiCost=parseInt(data.taxi_cost);//打车

        if(data && data.transits){
          var transits = data.transits;
          for(var i = 0; i < transits.length; i++){
            var segments = transits[i].segments;
            transits[i].transport = [];
            for(var j = 0; j < segments.length; j++){
              if(segments[j].bus && segments[j].bus.buslines && segments[j].bus.buslines[0] && segments[j].bus.buslines[0].name){
                var name = segments[j].bus.buslines[0].name
                if(j!==0){
                  name = '--' + name;
                }
                transits[i].transport.push(name);
              }
            }
          }
        };

        //总数据 transits 多条路线
        console.log(transits,'多条路线');
        
     

        //时间 距离 格式化
        function distanceFn(n,a){
          if( a && a=='dis'){
            var distance=(n/1000).toFixed(1);
            return distance
          }else{
            var duration=parseInt(n/60);
            return duration
          }
        };

        //线路Point 整合
        that.lineAddPoint=function(arr){
          points=[];
          for(var i = 0; i < arr.length; i++){
            var everyLine=arr[i].bus.buslines; 
            if(everyLine==0){continue};//判断同一条路里，每个是否有数据 
       
            var myPol=everyLine[0].polyline.split(';');

            for(var j = 0;j < myPol.length; j++){
              points.push({
                longitude: parseFloat(myPol[j].split(',')[0]),
                latitude: parseFloat(myPol[j].split(',')[1])
              });
            };
          };
            // console.log(points,'在函数')
            return points;
        };
        //btn 显示距离 公里 
        var a=1000,b=100000,c=100000,d=1000;
        var cost_index,distance_index,duration_index,foot_index,ALLInfor=[];
        for(var i=0;i<transits.length;i++){
             if(a>transits[i].cost){//找票价最少的
                a=transits[i].cost;
                cost_index=i;
             };
             if(b>transits[i].distance){//找距离最近的
                b=transits[i].distance;
                distance_index=i;
             };
             if(c>transits[i].duration){//找时间最短的
                c=transits[i].duration;
                duration_index=i;
             };
             if(d>transits[i].walking_distance){//找步行最短的
                d=transits[i].walking_distance;
                foot_index=i;
             };
        }; 

        ALLInfor.push({"distance":distanceFn(transits[cost_index].distance,'dis'),"duration":distanceFn(transits[cost_index].duration)});
        ALLInfor.push({"distance":distanceFn(transits[distance_index].distance,'dis'),"duration":distanceFn(transits[distance_index].duration)});
        ALLInfor.push({"distance":distanceFn(transits[duration_index].distance,'dis'),"duration":distanceFn(transits[duration_index].duration)});
        ALLInfor.push({"distance":distanceFn(transits[foot_index].distance,'dis'),"duration":distanceFn(transits[foot_index].duration)});
        // console.log(ALLInfor)//Btn位置对应

        //默认第一条路
        var points=[],pointsBox=[];
        if(transits[cost_index] && transits[cost_index].segments){
          var stepsBox = transits[cost_index].segments;
          points=that.lineAddPoint(stepsBox);
        };
          // console.log(points,'回常规')
        that.setData({
          polyline: [{
            points: points,
            color: "#0091ff",
            width: 6
          }],
          includePoints:points,
          taxiCost:taxiCost,
          ALLInfor:ALLInfor,
          transits:transits
        });
      },
      fail: function(info){ }
    });

  },
  btnTap:function(e){
    var points,pointsBox=[],n=0;
    var _index= e.currentTarget.dataset.index;//索引
    var transits=this.data.transits;
    var that=this;
    console.log(this,e) 

    if(transits[_index] && transits[_index].segments){
      var stepsBox = transits[_index].segments;
      points=that.lineAddPoint(stepsBox);
      
    };
    // console.log(points,'回点击')
      that.setData({
        polyline: [{
          points: points,
          color: "#0091ff",
          width: 6
        }],
        includePoints:points
      });
  },

  //跳转详情页
  goDetail: function(){
    wx.navigateTo({
      url: '../navigation_car_detail/navigation'
    })
  },
  //步行
  goToWalk: function (e) {
    var _this = this;
 
    var latChoose=_this.data.choosePositon[1];
    var longChoose=_this.data.choosePositon[0];

    var latCurrent=_this.data.currentPosition[1];
    var longCurrent=_this.data.currentPosition[0];

    wx.redirectTo({
       url: '../gdMapFoot/gdMapFoot?latChoose='+latChoose+'&longChoose='+longChoose+'&latCurrent='+latCurrent+'&longCurrent='+longCurrent
    })
  }
})