
//引入 wxParse.js  注意路径
var WxParse = require('../../wxParse/wxParse.js');

var conifg = require('../../utils/config.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    host:conifg.host

  },

  getloadData(id){
    var that = this;
    wx.request({
      url: conifg.host+'api/productcontent?id='+id,
      header: {
        'content-type': 'application/json' // 默认值
      },

      success(res) {
        console.log(res.data)

        var datas=res.data.result[0];

        datas.img_url = datas.img_url.replace(/\\/g, '/')

        var article = datas.content;

        WxParse.wxParse('article', 'html', article, that, 0);

        that.setData({
          list: datas
        }) 

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.getloadData(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }

  
})