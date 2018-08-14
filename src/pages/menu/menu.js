Page({

  /**
   * 页面的初始数据
   */
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
    menu:[],

    currentPage: 0,
    selected: 0,
    howMuch: 12,
    cost:0
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
    //获取菜单
    wx.request({
      url: "https://www.easy-mock.com/mock/596257bc9adc231f357c4664/restaurant/menu",
      method: "GET",
      success: function (res) {
        that.setData({
          menu: res.data,
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
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
  //加入到购物车
  addToTrolley: function (e) {
    var info = this.data.menu;
    info[this.data.selected].menuContent[e.currentTarget.dataset.index].numb++;
    this.setData({
      cost: this.data.cost+this.data.menu[this.data.selected].menuContent[e.currentTarget.dataset.index].price,
      menu: info,
    })
  },
  //已选商品 减1
  removeFromTrolley: function (e) {
    var info = this.data.menu;
    if (info[this.data.selected].menuContent[e.currentTarget.dataset.index].numb!=0){
      info[this.data.selected].menuContent[e.currentTarget.dataset.index].numb--;
      this.setData({
        cost: this.data.cost - this.data.menu[this.data.selected].menuContent[e.currentTarget.dataset.index].price,
        menu: info,
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