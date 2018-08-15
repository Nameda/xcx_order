Mock.mock(/userInfo/,{
    status:200,
    data:{
        userName:'卡布达lala'
    }
}),
Mock.mock(/storeInfo/,{
    status:200,
    storeInfo:{
        name:'卡布达的奶茶店',
        distance:'1.2',
        address:'四川省成都市卡卡',
        phone:'15278907890',
        longitude:'',
        latitude:''
        },
})
Mock.mock(/getMenu/,{
    data:[
        {
            "typeName": "快餐类",
            "menuContent": [{
                "name": "炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534311601157&di=4bb480a6aee42d0191ff63976337dbbf&imgtype=0&src=http%3A%2F%2Fcy.89178.com%2Fupload%2Farticle%2F20160825%2F87214375981472114735.jpg",
                "sales": 22,
                "rating": 3,
                "price": 15,
                "numb": 0
            }, {
                "name": "汉堡",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534311630643&di=e8605ec3b56c9b36130c94d5fce474a6&imgtype=0&src=http%3A%2F%2Ftop.shang360.com%2Fupload%2Farticle%2F20151010%2F94320056731444459546.jpg",
                "sales": 22,
                "rating": 3,
                "price": 10,
                "numb": 0
            }, {
                "name": "鸡翅",
                "src": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2605376543,2660171472&fm=27&gp=0.jpg",
                "sales": 22,
                "rating": 3,
                "price": 11,
                "numb": 0
            }, {
                "name": "薯条",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534311675352&di=4f90cc6f2b72e225ac8ad5c398449c60&imgtype=0&src=http%3A%2F%2Fwww.cnfoodnet.com%2Fuploadfile%2F2017%2F0925%2F20170925064910414.jpg",
                "sales": 22,
                "rating": 3,
                "price": 32,
                "numb": 0
            }, {
                "name": "汉堡",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534311630643&di=e8605ec3b56c9b36130c94d5fce474a6&imgtype=0&src=http%3A%2F%2Ftop.shang360.com%2Fupload%2Farticle%2F20151010%2F94320056731444459546.jpg",
                "sales": 22,
                "rating": 3,
                "price": 10,
                "numb": 0
            }]
        }, {
            "typeName": "盖浇饭类",
            "menuContent": [{
                "name": "土豆牛肉盖浇饭",
                "src": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=453984443,3335605648&fm=27&gp=0.jpg",
                "sales": 22,
                "rating": 3,
                "price": 9,
                "numb": 0
            }, {
                "name": "肉末茄子盖浇饭",
                "src": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2233585827,3571560627&fm=27&gp=0.jpg",
                "sales": 22,
                "rating": 3,
                "price": 21,
                "numb": 0
            }, {
                "name": "番茄炒蛋盖浇饭",
                "src": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3007961664,1748996109&fm=27&gp=0.jpg",
                "sales": 22,
                "rating": 3,
                "price": 50,
                "numb": 0
            }]
        }, {
            "typeName": "养生粥类",
            "menuContent": [{
                "name": "桂圆莲子粥",
                "src": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4185962345,377564467&fm=27&gp=0.jpg",
                "sales": 22,
                "rating": 3,
                "price": 15,
                "numb": 0
            }, {
                "name": "皮蛋瘦肉粥",
                "src": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3820026741,30884540&fm=27&gp=0.jpg",
                "sales": 22,
                "rating": 3,
                "price": 12,
                "numb": 0
            }]
        }, {
            "typeName": "小吃类",
            "menuContent": [{
                "name": "肉夹馍",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534312673780&di=aa880aaec11729f14f9acb80670e3421&imgtype=0&src=http%3A%2F%2Fs14.sinaimg.cn%2Fmw690%2F003n3ghzzy7gpGbUhZP2d%26690",
                "sales": 22,
                "rating": 3,
                "price": 4,
                "numb": 0
            }]
        }, {
            "typeName": "小吃类",
            "menuContent": [{
                "name": "肉夹馍",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534312673780&di=aa880aaec11729f14f9acb80670e3421&imgtype=0&src=http%3A%2F%2Fs14.sinaimg.cn%2Fmw690%2F003n3ghzzy7gpGbUhZP2d%26690",
                "sales": 22,
                "rating": 3,
                "price": 4,
                "numb": 0
            }]
        }, {
            "typeName": "小吃类",
            "menuContent": [{
                "name": "肉夹馍",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534312673780&di=aa880aaec11729f14f9acb80670e3421&imgtype=0&src=http%3A%2F%2Fs14.sinaimg.cn%2Fmw690%2F003n3ghzzy7gpGbUhZP2d%26690",
                "sales": 22,
                "rating": 3,
                "price": 4,
                "numb": 0
            }]
        }, {
            "typeName": "小吃类",
            "menuContent": [{
                "name": "肉夹馍",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534312673780&di=aa880aaec11729f14f9acb80670e3421&imgtype=0&src=http%3A%2F%2Fs14.sinaimg.cn%2Fmw690%2F003n3ghzzy7gpGbUhZP2d%26690",
                "sales": 22,
                "rating": 3,
                "price": 4,
                "numb": 0
            }]
        }, {
            "typeName": "小吃类",
            "menuContent": [{
                "name": "肉夹馍",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534312673780&di=aa880aaec11729f14f9acb80670e3421&imgtype=0&src=http%3A%2F%2Fs14.sinaimg.cn%2Fmw690%2F003n3ghzzy7gpGbUhZP2d%26690",
                "sales": 22,
                "rating": 3,
                "price": 4,
                "numb": 0
            }]
        }, {
            "typeName": "小吃类",
            "menuContent": [{
                "name": "肉夹馍",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534312673780&di=aa880aaec11729f14f9acb80670e3421&imgtype=0&src=http%3A%2F%2Fs14.sinaimg.cn%2Fmw690%2F003n3ghzzy7gpGbUhZP2d%26690",
                "sales": 22,
                "rating": 3,
                "price": 4,
                "numb": 0
            }]
        }, {
            "typeName": "小吃类",
            "menuContent": [{
                "name": "肉夹馍",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534312673780&di=aa880aaec11729f14f9acb80670e3421&imgtype=0&src=http%3A%2F%2Fs14.sinaimg.cn%2Fmw690%2F003n3ghzzy7gpGbUhZP2d%26690",
                "sales": 22,
                "rating": 3,
                "price": 4,
                "numb": 0
            }]
        }, {
            "typeName": "小吃类",
            "menuContent": [{
                "name": "肉夹馍",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534312673780&di=aa880aaec11729f14f9acb80670e3421&imgtype=0&src=http%3A%2F%2Fs14.sinaimg.cn%2Fmw690%2F003n3ghzzy7gpGbUhZP2d%26690",
                "sales": 22,
                "rating": 3,
                "price": 4,
                "numb": 0
            }]
        }, {
            "typeName": "小吃类",
            "menuContent": [{
                "name": "肉夹馍",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534312673780&di=aa880aaec11729f14f9acb80670e3421&imgtype=0&src=http%3A%2F%2Fs14.sinaimg.cn%2Fmw690%2F003n3ghzzy7gpGbUhZP2d%26690",
                "sales": 22,
                "rating": 3,
                "price": 4,
                "numb": 0
            }]
        }
    ]
})
Mock.mock(/aitivity/,{
    code:200,
    data:[{
        text:'只是优惠信息1只是优惠信息1只是优惠信息1只是优惠信息1只是优惠信息1只是优惠信息1只是优惠信息1只是优惠信息1'
    },{
        text:'只是优惠信息2'
    },{
        text:'只是优惠信息3'
    },{
        text:'只是优惠信息4'
    }]
})