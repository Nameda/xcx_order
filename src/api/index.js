import util from '../utils/util.js';
import config from '../config/index.js';

// 请求用户信息接口
const getUserInfo = (data) => {
  return util.promise(wx.request, {
    header: {
      'content-type': 'application/json'//小程序默认为json
    },
    url: `${config.api}/userInfo`,
    method: 'POST',//必须大写
    data: data
  }).then(res => {
    let data = res.data
    if (data.code === 0) {
      wx.setStorageSync('userInfo', data.data)
      return data.data
    }
  }).catch(e => { })
}

module.exports = {
  getUserInfo,
  

}