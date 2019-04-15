// pages/posts/post-detail/post-detail.js
// 引入脚本文件 这里只能用相对路径  不能用绝对路径
var postsData = require('../../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    var postID = options.id;
    this.data.currentPostID = postID;
    var postData = postsData.postList[postID];
    console.log(postData);
    this.setData({
      postData: postData
    })

    var postsCollected = wx.getStorageSync("posts_collected");
    if (postsCollected) {
      var postCollected = postsCollected[postID];
      if (postCollected){
        tihs.setData({
          collected: postCollected
        })
      }
    } else {
      var postsCollected = {};
      postsCollected[postID] = false;
      wx.setStorageSync("posts_collected", postsCollected)
    }
  },
  //用户点击收藏
  onCollectionTap:function(event) {
    console.log("aaa");
    var postsCollection = wx.getStorageSync("posts_collected")
    var postCollected = postsCollection[this.data.currentPostID];
    postCollected = !postCollected;
    postsCollected[this.data.currentPostID] = postCollected;
    //更新缓存
    wx.setStorageSync("posts_collected", postsCollected)
    tihs.setData({
      collected: postCollected
    })
  },
  //用户点击分享
  onShareTap:function(event) {

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})