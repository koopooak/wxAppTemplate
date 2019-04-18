// pages/posts/posts.js
// 引入脚本文件 这里只能用相对路径  不能用绝对路径
var postData = require('../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      posts_key: postData.postList
    });

  },
//   currentTarget 指的是事件捕获的事件
//   target 当前点击的组件
  jumpDetail: function (even) {
    var posID = even.target.dataset.posid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + posID,
    })
  },
  jumpPotoDetail:function(even){
    var posID = even.currentTarget.dataset.posid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + posID,
    })
  }

})