
import { getMenu,aitivity } from '../../api/index'
Page({
  data: {
    storeId:'',
    storeInfo:{
      name:'卡布达的奶茶店奶茶店奶茶店奶茶店奶茶店奶茶店奶茶店奶茶店奶茶店奶茶店奶茶店',
      distance:'1.2',
      address:'四川省成都市卡卡头的卡卡头的卡卡头的卡卡头的卡卡头的卡卡头的卡卡头的卡卡头的卡卡头的卡卡头的卡卡头',
      phone:'15278907890',
      longitude:'',
      latitude:''
    },
    activityData:[],
    menu:[],
    selected: 0,
    cost:0,
    count:0
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if(options.id){
      this.setData({
        storeId:options.id
      })
    }
    //获取 优惠信息
    this.getActivityData();
    //获取菜单
   this.getMenu()
  },
  //给商家打电话
  callFun:function(){
    wx.makePhoneCall({
      phoneNumber: this.data.storeInfo.phone,
      success: function(res) {
        // success
      }
    })
  },
  //定位到商家
  storeLocation:function(){
    wx.openLocation({
      latitude: 23.362490,
      longitude: 116.715790,
    })
  },
  //获取优惠信息
  getActivityData:function(){
    aitivity().then(res=>{
      if(res.code == 200){
        this.setData({
          activityData:res.data
        })
      }
    })
  },
  //获取菜单
  getMenu:function(){
    getMenu().then(res=>{
      this.setData({
        menu:res.data
      })
    })
  },
  //加入到购物车
  addToTrolley: function (e) {
    var info = this.data.menu;
    var num = this.data.count+1;
    info[this.data.selected].menuContent[e.currentTarget.dataset.index].numb++;
    this.setData({
      cost: this.data.cost+this.data.menu[this.data.selected].menuContent[e.currentTarget.dataset.index].price,
      menu: info,
      count: num
    })
    console.log(this.data.count);
  },
  //已选商品 减1
  removeFromTrolley: function (e) {
    var info = this.data.menu;
    var num = this.data.count-1;
    if (info[this.data.selected].menuContent[e.currentTarget.dataset.index].numb!=0){
      info[this.data.selected].menuContent[e.currentTarget.dataset.index].numb--;
      this.setData({
        cost: this.data.cost - this.data.menu[this.data.selected].menuContent[e.currentTarget.dataset.index].price,
        menu: info,
        count: num
      })
    }
  },
  //切换种类
  turnMenu: function (e) {
    this.setData({
      selected: e.currentTarget.dataset.index
    })
    console.log(e.currentTarget.dataset.index);
  },

})