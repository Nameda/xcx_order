//index.js
//获取应用实例
import { getConfig,getArticleList } from '../../api/index'
const app = getApp()
Page({
  data: {

  },
  //事件处理函数
  bindViewTap() {

  },
  onLoad() {
    getArticleList()
  }
})
