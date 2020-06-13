var fileData = require('../../utils/data');
import loginUser from '../../utils/data';

Page({  
  getMyInfo: function(e) {
    var args = e;
    var ts = this;
    console.log(e.detail); 
    if (e.detail.errMsg == 'getUserInfo:ok' ) {
        loginUser.login = true;
        loginUser.nickName = e.detail.userInfo.nickName;
        loginUser.avatarUrl = e.detail.userInfo.avatarUrl
        console.log(loginUser.nickName);
        wx.navigateTo({
          url:'../user/user'
        })
    } else {
      wx.hideLoading();
      wx.showModal({
        title: '提示',
        content: '登录失败',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }  
  }
})