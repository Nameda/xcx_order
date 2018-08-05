//index.js
//获取应用实例
// import { getConfig,getArticleList } from '../../api/index'
const app = getApp()
Page({
  data: {
    movies:[{
      url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533273890882&di=ade7b6950e519d7fd7bb5c917903cda6&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201703%2F10%2F4927d1387af50334baff7de26a9da07e.jpg'
    },{
      url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533868695&di=db62948974e268b25fb6ee313395a55c&imgtype=jpg&er=1&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fblog%2F201404%2F27%2F20140427225623_Gck4c.thumb.700_0.jpeg'
    },{
      url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533273936332&di=16606d497b212ae1ff5076ef1615b27d&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F161201%2F106-161201101A5946.jpg'
    },{
      url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533274291381&di=ed091a0c5769f09e229f37d0093a5ccc&imgtype=0&src=http%3A%2F%2Fimg06.tooopen.com%2Fimages%2F20170221%2Ftooopen_sy_199240913125.jpg'
    }],
    currentTab:1,
    currentStore:0,
    storeList:[{
      name:'卡布达的奶茶店',
      distance:0.1,
      address:'四川省成都市三江镇啦啦啦啦',
      isSelect:false
    },{
      name:'卡布达的奶茶店',
      distance:0.2,
      address:'四川省成都市三江镇啦啦啦啦',
      isSelect:true
    },{
      name:'卡布达的奶茶店',
      distance:0.3,
      address:'四川省成都市三江镇啦啦啦啦',
      isSelect:false
    },{
      name:'卡布达的奶茶店',
      distance:0.4,
      address:'四川省成都市三江镇啦啦啦啦',
      isSelect:true
    },{
      name:'卡布达的奶茶店',
      distance:0.5,
      address:'四川省成都市三江镇啦啦啦啦',
      isSelect:false
    }]
  },
  //事件处理函数
  bindViewTap() {

  },
  onLoad() {
    // getArticleList()
  },
  changeTab:function(event){
    var type = event.currentTarget.dataset['type'];
    if(type !== this.data.currentTab){
      this.setData({
        currentTab:type
      })
      //列表数据处理
      if(type==1){
        //请求所有数据
      }else if(type==2){
        //请求收藏数据
      }
    }
  },
  chooseStore:function(event){
    var index = event.currentTarget.dataset['index'];
    this.setData({
      currentStore:index
    })
  }
})
