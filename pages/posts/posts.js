// pages/posts/posts.js
// z这里只能用相对路径  不能用绝对路径
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
    
  }

})