//index.js
//获取应用实例
var app = getApp()
var myData = require('../../utils/data')
var util = require('../../utils/util')
import loginUser from '../../utils/data';


Page({
  // 页面初始数据
  data: {
    userData:loginUser,
    addrDate:util.replacePhone(myData.userData().addrs,true)
  },

  onLoad:function(){
    var that = this
    that.setData({
      userData: loginUser
    })
    console.log(loginUser.nickName);
  },
  // 地址编辑
  editAddr : function(e){
    console.log(e)
    wx.navigateTo({
      url:'../edit_addr/edit_addr?addrid='+e.currentTarget.dataset.addrid
    })
  }

})
