// pages/tour/tour.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data:{
    "bigIcon":"http://www.sun1985.com/wxXiao/one.jpg",
    "smallIcon":"../../image/7.png",
    "imgAll":[
      {"year":"2017年","allInfor":[{"img":"http://www.sun1985.com/wxXiao/2017/5.jpg","tit":"普吉岛","allImg":
        ["http://www.sun1985.com/wxXiao/2017/1.jpg","http://www.sun1985.com/wxXiao/2017/2.jpg","http://www.sun1985.com/wxXiao/2017/3.jpg","http://www.sun1985.com/wxXiao/2017/4.jpg","http://www.sun1985.com/wxXiao/2017/6.jpg","http://www.sun1985.com/wxXiao/2017/7.jpg"]
      }]},
      {"year":"2016年","allInfor":[{"img":"http://www.sun1985.com/wxXiao/2016/2.jpg","tit":"8月昌黎黄金海岸","allImg":
        ["http://www.sun1985.com/wxXiao/2016/2.jpg","http://www.sun1985.com/wxXiao/2016/9.jpg","http://www.sun1985.com/wxXiao/2016/10.jpg","http://www.sun1985.com/wxXiao/2016/14.jpg","http://www.sun1985.com/wxXiao/2016/12.jpg","http://www.sun1985.com/wxXiao/2016/13.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2016/3.jpg","tit":"10月居庸关","allImg":
        ["http://www.sun1985.com/wxXiao/2016/11.jpg","http://www.sun1985.com/wxXiao/2016/5.jpg","http://www.sun1985.com/wxXiao/2016/6.jpg","http://www.sun1985.com/wxXiao/2016/7.jpg","http://www.sun1985.com/wxXiao/2016/8.jpg","http://www.sun1985.com/wxXiao/2016/15.jpg"]
      }]},
      {"year":"2015年","allInfor":[{"img":"http://www.sun1985.com/wxXiao/2015/7.jpg","tit":"3月昌平农家游","allImg":
        ["http://www.sun1985.com/wxXiao/2015/1.jpg","http://www.sun1985.com/wxXiao/2015/3.jpg","http://www.sun1985.com/wxXiao/2015/2.jpg","http://www.sun1985.com/wxXiao/2015/4.jpg","http://www.sun1985.com/wxXiao/2015/5.jpg","http://www.sun1985.com/wxXiao/2015/6.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2015/9.jpg","tit":"4月温泉","allImg":
        ["http://www.sun1985.com/wxXiao/2015/8.jpg","http://www.sun1985.com/wxXiao/2015/10.jpg","http://www.sun1985.com/wxXiao/2015/11.jpg","http://www.sun1985.com/wxXiao/2015/9.jpg","http://www.sun1985.com/wxXiao/2015/13.jpg","http://www.sun1985.com/wxXiao/2015/14.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2015/22.jpg","tit":"5月青岛","allImg":
        ["http://www.sun1985.com/wxXiao/2015/16.jpg","http://www.sun1985.com/wxXiao/2015/17.jpg","http://www.sun1985.com/wxXiao/2015/18.jpg","http://www.sun1985.com/wxXiao/2015/19.jpg","http://www.sun1985.com/wxXiao/2015/20.jpg","http://www.sun1985.com/wxXiao/2015/21.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2015/23.jpg","tit":"7月昌黎黄金海岸","allImg":
        ["http://www.sun1985.com/wxXiao/2015/24.jpg","http://www.sun1985.com/wxXiao/2015/25.jpg","http://www.sun1985.com/wxXiao/2015/26.jpg","http://www.sun1985.com/wxXiao/2015/27.jpg","http://www.sun1985.com/wxXiao/2015/28.jpg","http://www.sun1985.com/wxXiao/2015/29.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2015/30.jpg","tit":" 9月西湖+乌镇","allImg":
        ["http://www.sun1985.com/wxXiao/2015/31.jpg","http://www.sun1985.com/wxXiao/2015/32.jpg","http://www.sun1985.com/wxXiao/2015/33.jpg","http://www.sun1985.com/wxXiao/2015/34.jpg","http://www.sun1985.com/wxXiao/2015/35.jpg","http://www.sun1985.com/wxXiao/2015/36.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2015/39.jpg","tit":"10月古北口水镇","allImg":
        ["http://www.sun1985.com/wxXiao/2015/38.jpg","http://www.sun1985.com/wxXiao/2015/40.jpg","http://www.sun1985.com/wxXiao/2015/41.jpg","http://www.sun1985.com/wxXiao/2015/42.jpg","http://www.sun1985.com/wxXiao/2015/43.jpg","http://www.sun1985.com/wxXiao/2015/44.jpg"]
      } ]},
      {"year":"2014年","allInfor":[{"img":"http://www.sun1985.com/wxXiao/2014/1.jpg","tit":"5月水长城+洼里乡居楼","allImg":
        ["http://www.sun1985.com/wxXiao/2014/2.jpg","http://www.sun1985.com/wxXiao/2014/3.jpg","http://www.sun1985.com/wxXiao/2014/4.jpg","http://www.sun1985.com/wxXiao/2014/5.jpg","http://www.sun1985.com/wxXiao/2014/6.jpg","http://www.sun1985.com/wxXiao/2014/7.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2014/8.jpg","tit":"6月官厅","allImg":
        ["http://www.sun1985.com/wxXiao/2014/9.jpg","http://www.sun1985.com/wxXiao/2014/10.jpg","http://www.sun1985.com/wxXiao/2014/11.jpg","http://www.sun1985.com/wxXiao/2014/12.jpg","http://www.sun1985.com/wxXiao/2014/13.jpg","http://www.sun1985.com/wxXiao/2014/14.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2014/15.jpg","tit":"7月昌黎黄金海岸","allImg":
        ["http://www.sun1985.com/wxXiao/2014/16.jpg","http://www.sun1985.com/wxXiao/2014/17.jpg","http://www.sun1985.com/wxXiao/2014/18.jpg","http://www.sun1985.com/wxXiao/2014/19.jpg","http://www.sun1985.com/wxXiao/2014/20.jpg","http://www.sun1985.com/wxXiao/2014/21.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2014/22.jpg","tit":"9月大连","allImg":
        ["http://www.sun1985.com/wxXiao/2014/23.jpg","http://www.sun1985.com/wxXiao/2014/24.jpg","http://www.sun1985.com/wxXiao/2014/25.jpg","http://www.sun1985.com/wxXiao/2014/26.jpg","http://www.sun1985.com/wxXiao/2014/27.jpg","http://www.sun1985.com/wxXiao/2014/28.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2014/29.jpg","tit":"10月天津","allImg":
        ["http://www.sun1985.com/wxXiao/2014/30.jpg","http://www.sun1985.com/wxXiao/2014/31.jpg","http://www.sun1985.com/wxXiao/2014/32.jpg","http://www.sun1985.com/wxXiao/2014/33.jpg","http://www.sun1985.com/wxXiao/2014/34.jpg","http://www.sun1985.com/wxXiao/2014/31.jpg"]
      }]},
      {"year":"2013年","allInfor":[{"img":"http://www.sun1985.com/wxXiao/2013/35.jpg","tit":"6月京西大草原","allImg":
        ["http://www.sun1985.com/wxXiao/2013/36.jpg","http://www.sun1985.com/wxXiao/2013/37.jpg","http://www.sun1985.com/wxXiao/2013/38.jpg","http://www.sun1985.com/wxXiao/2013/39.jpg","http://www.sun1985.com/wxXiao/2013/40.jpg","http://www.sun1985.com/wxXiao/2013/41.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2013/42.jpg","tit":"7月丰宁坝上","allImg":
        ["http://www.sun1985.com/wxXiao/2013/43.jpg","http://www.sun1985.com/wxXiao/2013/44.jpg","http://www.sun1985.com/wxXiao/2013/45.jpg","http://www.sun1985.com/wxXiao/2013/46.jpg","http://www.sun1985.com/wxXiao/2013/47.jpg","http://www.sun1985.com/wxXiao/2013/48.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2013/49.jpg","tit":"8月秦皇岛","allImg":
        ["http://www.sun1985.com/wxXiao/2013/50.jpg","http://www.sun1985.com/wxXiao/2013/51.jpg","http://www.sun1985.com/wxXiao/2013/52.jpg","http://www.sun1985.com/wxXiao/2013/53.jpg","http://www.sun1985.com/wxXiao/2013/54.jpg","http://www.sun1985.com/wxXiao/2013/55.jpg"]
      }]},
      {"year":"2012年","allInfor":[{"img":"http://www.sun1985.com/wxXiao/2012/1.jpg","tit":"6月西安","allImg":
        ["http://www.sun1985.com/wxXiao/2012/2.jpg","http://www.sun1985.com/wxXiao/2012/3.jpg","http://www.sun1985.com/wxXiao/2012/4.jpg","http://www.sun1985.com/wxXiao/2012/5.jpg","http://www.sun1985.com/wxXiao/2012/6.jpg","http://www.sun1985.com/wxXiao/2012/7.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2012/8.jpg","tit":"8月八达岭野生动物园","allImg":
        ["http://www.sun1985.com/wxXiao/2012/9.jpg","http://www.sun1985.com/wxXiao/2012/10.jpg","http://www.sun1985.com/wxXiao/2012/11.jpg","http://www.sun1985.com/wxXiao/2012/12.jpg","http://www.sun1985.com/wxXiao/2012/13.jpg","http://www.sun1985.com/wxXiao/2012/14.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2012/15.jpg","tit":"10月十渡","allImg":
        ["http://www.sun1985.com/wxXiao/2012/16.jpg","http://www.sun1985.com/wxXiao/2012/17.jpg","http://www.sun1985.com/wxXiao/2012/18.jpg","http://www.sun1985.com/wxXiao/2012/19.jpg","http://www.sun1985.com/wxXiao/2012/20.jpg","http://www.sun1985.com/wxXiao/2012/21.jpg"]
      } ]},
      {"year":"2011年","allInfor":[{"img":"http://www.sun1985.com/wxXiao/2011/1.jpg","tit":"5月大明湖+趵突泉+泰山","allImg":
        ["http://www.sun1985.com/wxXiao/2011/2.jpg","http://www.sun1985.com/wxXiao/2011/3.jpg","http://www.sun1985.com/wxXiao/2011/4.jpg","http://www.sun1985.com/wxXiao/2011/5.jpg","http://www.sun1985.com/wxXiao/2011/6.jpg","http://www.sun1985.com/wxXiao/2011/7.jpg"]
      },{"img":"http://www.sun1985.com/wxXiao/2011/8.jpg","tit":"10月山西","allImg":
        ["http://www.sun1985.com/wxXiao/2011/9.jpg","http://www.sun1985.com/wxXiao/2011/10.jpg","http://www.sun1985.com/wxXiao/2011/11.jpg","http://www.sun1985.com/wxXiao/2011/12.jpg","http://www.sun1985.com/wxXiao/2011/13.jpg","http://www.sun1985.com/wxXiao/2011/14.jpg"]
      }]}
    ],
    "imageNum":"1",           //大图片只能选择一个
    "spacePlace":{"one":[8,"scenic spots"],"two":[130,"scenic spots"],"three":[20,"scenic spots"]}, //标题
    "animationData":{},         //动画tip
    "tipView":[0,0],            //tip图片索引
    "animationImg":{},         //图片滑动
     "indicatorDots": true,   //是否显示面板指示点
     "autoplay": true,  
     "interval": 5000,  
     "duration": 500,  
     "fixed":''                 //蒙层禁止滑动  
  },
  changeTopImage:function(){//获取本地图片
    var _this = this;
    
    wx.chooseImage({
      count:this.data.imageNum,
      success:function(res){
         _this.setData({
           bigIcon:res.tempFilePaths
         });
      }
    });
  },
  animationBox:function(){
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
  showModal:function(e){  //弹出窗口
    //索引
    var row = e.currentTarget.dataset.row;
    var aBlock = e.currentTarget.dataset.block;
    
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 200,
      timingFunction: "ease-in-out"
    });
    this.animation=animation;
    animation.rotateY(0).step();
    console.log(e)
    this.setData({
      tipView:[row,aBlock],
      animationData:animation.export(),
      fixed:'position:fixed'
    });    
  },
  rotateYbox:function(){ //关闭窗口
    this.animation.rotateY(90).step();
    this.setData({
      animationData:this.animation.export(),
      fixed:''
    });
  },
  intervalChange:function(){
    console.log('滚动啦');
  }
 
 
  

})