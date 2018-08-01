import util from '../utils/util.js';
import config from '../config/index.js'
// 请求api接口
wx.query_site_name = null
const getConfig = (data) => {
  return util.promise(wx.request, {
    header: {
      'content-type': 'application/x-www-form-urlencoded'//小程序默认为json
    },
    url: `${config.api}/org/query_site_name`,
    method: 'POST',//必须大写
    data: {
      doMain: 'jypx'
    },
  }).then(res => {
    let data = res.data
    if (data.code === 0) {
      // wx.setStorageSync('configData', data.data)
      wx.query_site_name = data.data
      return data.data
    }
  }).catch(e => { })
}
const getCourseList = async (data = {}) => {
  if (!wx.query_site_name) {
    await getConfig()
  }
  data.siteHierarchy = wx.query_site_name.hierarchy
  return util.promise(wx.request, {
    header: {
      'content-type': 'application/x-www-form-urlencoded'//小程序默认为json
    },
    url: `${config.api}/course/course_list_guest`,
    method: 'POST',//必须大写
    data
  }).then(res => {
    if (res.data.code === 0) {
      return res.data.data
    }
  }).catch(e => { })
}
// article_list_guest
const getArticleList = async (data = {}) => {
  if (!wx.query_site_name) {
    await getConfig()
  }
  data.siteHierarchy = wx.query_site_name.hierarchy
  console.log(wx.query_site_name)
  return util.promise(wx.request, {
    header: {
      'content-type': 'application/x-www-form-urlencoded'//小程序默认为json
    },
    url: `${config.api}/article/article_list_guest`,
    method: 'POST',//必须大写
    data
  }).then(res => {
    if (res.data.code === 0) {
      return res.data.data
    }
  }).catch(e => { })

}
module.exports = {
  getConfig,
  getCourseList,
  getArticleList

}