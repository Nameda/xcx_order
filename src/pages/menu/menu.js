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
    cost:0,
    pullBar: false
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
  

  pullBar: function () {
    this.setData({
      pullBar: !this.data.pullBar
    })
  }
  ,
  addToTrolley: function (e) {
    var info = this.data.menu;
    info[this.data.selected].menuContent[e.currentTarget.dataset.index].numb++;
    this.setData({
      cost: this.data.cost+this.data.menu[this.data.selected].menuContent[e.currentTarget.dataset.index].price,
      menu: info,
    })
  },
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
  turnPage: function (e) {
    this.setData({
      currentPage: e.currentTarget.dataset.index
    })
  },
  turnTitle: function (e) {
    if(e.detail.source=="touch"){
      this.setData({
        currentPage: e.detail.current
      })
    }
  },
  turnMenu: function (e) {
    this.setData({
      selected: e.currentTarget.dataset.index
    })
    console.log(e.currentTarget.dataset.index);
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

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})