// pages/food/food.js

var conifg = require('../../utils/config.js')
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {

    list:[],
    host: conifg.host
  },

  gotoNext(ev){
    var id = ev.currentTarget.dataset["id"];
    wx.navigateTo({
      url: '../foodContent/foodContent?id='+id
    })
  },

  requestLoadData(){

    var that = this;
    wx.request({
      url: conifg.host+'api/productlist', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      var arr = res.data.result;
      for(var i=0;i<arr.length;i++){
        for (var j = 0; j < arr[i].list.length;j++){

          arr[i].list[j].img_url = arr[i].list[j].img_url.replace(/\\/g,'/')
        }
      }
        that.setData({
        
          list: arr

        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestLoadData();
    app.getAppMsg();
  }



})

// 列表：http://a.itying.com/api/productlist


// 详情：http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955