//index.js
//获取用户信息
import { getUserInfo } from '../../api/index'
//引用腾讯地图API
var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
var qqmapsdk;
//引入 mock 
// require('../../../_mock.js');
const app = getApp()
Page({
  data: {
    address: '',
    movies: [{
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533273890882&di=ade7b6950e519d7fd7bb5c917903cda6&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201703%2F10%2F4927d1387af50334baff7de26a9da07e.jpg'
    }, {
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533868695&di=db62948974e268b25fb6ee313395a55c&imgtype=jpg&er=1&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fblog%2F201404%2F27%2F20140427225623_Gck4c.thumb.700_0.jpeg'
    }, {
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533273936332&di=16606d497b212ae1ff5076ef1615b27d&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F161201%2F106-161201101A5946.jpg'
    }, {
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533274291381&di=ed091a0c5769f09e229f37d0093a5ccc&imgtype=0&src=http%3A%2F%2Fimg06.tooopen.com%2Fimages%2F20170221%2Ftooopen_sy_199240913125.jpg'
    }],
    currentTab: 1,
    currentStore: 0,
    storeList: [{
      storeId:11,
      name: '卡布达的奶茶店',
      distance: 0.1,
      address: '四川省成都市三江镇啦啦啦啦',
      isSelect: false
    }, {
      storeId:22,      
      name: '卡布达的奶茶店',
      distance: 0.2,
      address: '四川省成都市三江镇啦啦啦啦',
      isSelect: true
    }, {
      storeId:33, 
      name: '卡布达的奶茶店',
      distance: 0.3,
      address: '四川省成都市三江镇啦啦啦啦',
      isSelect: false
    }, {
      storeId:44, 
      name: '卡布达的奶茶店',
      distance: 0.4,
      address: '四川省成都市三江镇啦啦啦啦',
      isSelect: true
    }, {
      storeId:55, 
      name: '卡布达的奶茶店',
      distance: 0.5,
      address: '四川省成都市三江镇啦啦啦啦',
      isSelect: false
    }]
  },
  onLoad: function (options) {
    //获取用户信息
    getUserInfo().then(res=>{
      console.log(res)
    })
    /*判断是第一次加载还是从position页面返回
    如果从position页面返回，会传递用户选择的地点*/
    if (options.address != null && options.address != '') {
      //设置变量 address 的值
      this.setData({
        address: options.address
      });
    } else {
      var that = this;
      // 调用接口
      wx.getLocation({
        type: "wgs84",
        success: function (t) {
          that.getAddress();
        },
        fail: function () {
          wx.showModal({
            title: "警告",
            content: "您点击了拒绝授权,无法正常使用功能，点击确定重新获取授权。",
            showCancel: !1,
            success: function (t) {
              wx.openSetting({
                success: function(t) {
                  that.getAddress();
                },
                fail: function(t) {}
              })
            }
          });
        },
        complete: function (t) { }
      });
    }
  },
  //获取当前地址
  getAddress:function(){
    var that = this;
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      //此key需要用户自己申请
      key: 'MNXBZ-G5TWD-GYF42-HHZJL-2W2J3-PVBX4'
    });
    qqmapsdk.reverseGeocoder({
      success: function (res) {
        that.setData({
          address: res.result.address
        });
      },
      fail: function (res) {
      },
      complete: function (res) {
        //console.log(res);
      }
    });
  },
  //选择地址
  onChangeAddress: function () {
    wx.navigateTo({
      url: "/pages/position/position"
    });
  },
  changeTab: function (event) {
    var type = event.currentTarget.dataset['type'];
    if (type !== this.data.currentTab) {
      this.setData({
        currentTab: type
      })
      //列表数据处理
      if (type == 1) {
        //请求所有数据
      } else if (type == 2) {
        //请求收藏数据
      }
    }
  },
  chooseStore: function (event) {
    var index = event.currentTarget.dataset['index'];
    this.setData({
      currentStore: index
    })
  },
  goDetail:function(event){
    var id = event.currentTarget.dataset['id'];
    console.log(id);
    wx.navigateTo({
      url: "/pages/menu/menu?id="+id
    })
  }
})
