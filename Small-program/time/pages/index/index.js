// //index.js
const app = getApp()
var util = require('../../utils/util.js')
Page({
  data: {
   
  }, 
  bindDateChange: function (e) {
    var time = util.formatDate(new Date())
    var lyp = e.detail.value 
    var ss = (new Date(time) * 1 - new Date(lyp) * 1)/1000/60/60/24/30.42
     
    this.setData({
      ss:parseInt(ss+1/2)*1,
      lyp: 100 - Math.ceil(ss*100)/900,
      years: e.detail.value.split('-')[0],
      month: e.detail.value.split('-')[1]
    })
  }
})
