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
      }
    ]
  },
  //事件处理函数
  bindViewTap() {

  },
  onLoad() {
    // getCourseList()
  }
})
