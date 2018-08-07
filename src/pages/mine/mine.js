var regeneratorRuntime = require("../../lib/runtime.js");//index.js
var app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        menuitems: [
            { text: '我的优惠', url: '../coupons/coupon', icon: '../../imgs/mine/coupons.png', iconEnd: '../../imgs/mine/next.png' },
            { text: '', url: '../getPhone/getPhone', icon: '../../imgs/mine/phone.png', iconEnd: '../../imgs/mine/next.png' },
            { text: '平台须知', url: '../notice/notice', icon: '../../imgs/mine/notice.png', iconEnd: '../../imgs/mine/next.png' }
        ]
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this;
        // 获取用户信息
        wx.getSetting({
            success: res => {
            if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                wx.getUserInfo({
                success: res => {
                    // 可以将 res 发送给后台解码出 unionId
                    console.log(res.userInfo);
                    that.setData({
                        userInfo : res.userInfo
                    })
                    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                    // 所以此处加入 callback 以防止这种情况
                    if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                    }
                }
                })
            }
            }
        })
    },
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