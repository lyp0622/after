//index.js
//获取应用实例
const app = getApp();
const prituces = require('../../utils/img')
Page({
  data: {
    prituces,
    flage: false
  },
  onPageScroll: function(prituces) {
    // Do something when page scroll
    let top = prituces.scrollTop;
    let show = top > 60 ? true : false;
    console.log('top..........',top)
    console.log('show........',show)
  }
})
