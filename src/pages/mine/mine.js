var regeneratorRuntime = require("../../lib/runtime.js");//index.js
//获取应用实例
// Page({
//   data: {
//
//   },
//   //事件处理函数
//   bindViewTap() {
//
//   },
//   onLoad() {
//
//   }
// })
var _app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        menuitems: [
            { text: '我的优惠', url: '@', icon: '../../imgs/toolbar/mine/coupons.png', iconEnd: '../../imgs/toolbar/mine/next.png' },
            { text: '13233', url: '@', icon: '../../imgs/toolbar/mine/phone.png', iconEnd: '../../imgs/toolbar/mine/next.png' },
            { text: '平台须知', url: '@', icon: '../../imgs/toolbar/mine/notice.png', iconEnd: '../../imgs/toolbar/mine/next.png' }
        ]
    },
    /**
     * 生命周期函数--监听页面加载
     * onLoad: function (options) {
        let that = this;
        _app.getUserInfo(function (userinfo) {
            console.log(userinfo);
            console.log(getApp().globalData.userSign);
            that.setData({
                userinfo: userinfo,
                userSign: getApp().globalData.userSign
            });
        });
    },
     */


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

    /**
     * 生命周期函数--监听页面显示
     * onShow: function () {
        let that = this;
        _app.getUserInfo(function (userinfo) {
            console.log(userinfo);
            console.log(getApp().globalData.userSign);
            that.setData({
                userinfo: userinfo,
                userSign: getApp().globalData.userSign
            });
        });
    },
     */


    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {}
});