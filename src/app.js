//app.js
import { getCourseList, getConfig } from './api/index.js'
App({
  globalData: {
    userInfo: null,
    configData: null
  },
  async onLaunch() {
    // let configData = wx.getStorageSync('configData')
    // if (configData) {
    //   getCourseList({ siteHierarchy: configData.hierarchy })
    // } else {

    // }
    // data.siteHierarchy = configData.hierarchy
  }
})
