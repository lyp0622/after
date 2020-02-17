//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: [{
      message: '小苹果'
    }, {
      message: '狼的诱惑'
    },{
      message:'玩一次射箭'
    },{
      message:'练出几首自己的经典曲目'
    },{
      message:'好好'
    },{
      message:'最炫民族风'
    }]
  },

  gotoPage1: function(){ 
    wx.navigateTo({ url: '/pages/three/three', }) }
})