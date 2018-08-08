const app = getApp()
Page({
  data: {
    orders: [
      {
        orderTime: '2018-8-5 16:57:15',
        storeName: 'CoCo都可（成都市高新店）',
        getOrderTime: '2018-8-5 16:59:38', 
        orderType: '预约订单', 
        state: '已退款', 
        orderNum: 'C088', 
        price: '￥10.0'
      },
      {
        orderTime: '2018-8-7 16:57:15',
        storeName: 'CoCo都可（成都市高新店）',
        getOrderTime: '2018-8-5 16:59:38', 
        orderType: '预约订单', 
        state: '已确定', 
        orderNum: 'C089', 
        price: '￥15.0'
      },
      {
        orderTime: '2018-8-6 16:57:15',
        storeName: 'CoCo都可（成都市高新店）',
        getOrderTime: '2018-8-5 16:59:38', 
        orderType: '预约订单', 
        state: '已退款', 
        orderNum: 'C099', 
        price: '￥17.0'
      }
    ]
  },
  //事件处理函数
  bindViewTap() {

  },
  onLoad() {
    // getCourseList()
  },
  goDetail(){
    wx.navigateTo({
      url: "/pages/orderDetail/orderDetail"
    });
  }
})
