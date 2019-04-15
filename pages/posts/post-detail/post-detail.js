// pages/posts/post-detail/post-detail.js
// 引入脚本文件 这里只能用相对路径  不能用绝对路径
var postsData = require('../../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var postID = options.id;
    this.data.currentPostID = postID;
    var postData = postsData.postList[postID];
    this.setData({
      postData: postData
    })

    var postsCollected = wx.getStorageSync("posts_collected");
    if (postsCollected) {
      var postCollected = postsCollected[postID];
      if (postCollected) {
        this.setData({
          collected: postCollected
        });
      }
    } else {
      var postsCollected = {};
      postsCollected[postID] = false;
      wx.setStorageSync("posts_collected", postsCollected)
    }
  },
  //用户点击收藏
  onCollectionTap: function(event) {
    // 异步获取数据
    // this.getPostsStorage();
    // 同步获取数据
    this.getPostsStorageSyc();
  },

  //异步获取缓存
  getPostsStorage: function() {
    var that = this;
    wx.getStorage({
      key: 'posts_collected',
      success: function(res) {
        var postsCollection = res.data;
        var postCollected = postsCollection[that.data.currentPostID];
        postCollected = !postCollected;
        postsCollection[that.data.currentPostID] = postCollected;
        //更新缓存
        wx.setStorageSync("posts_collected", postsCollection)
        that.setData({
          collected: postCollected
        });

        wx.showToast({
          title: postCollected ? '收藏成功' : '取消收藏',
          duration: 1000,
          icon: 'success'
        })
      },
    })
  },
  // 同步获取缓存
  getPostsStorageSyc: function() {
    var postsCollection = wx.getStorageSync("posts_collected")
    var postCollected = postsCollection[this.data.currentPostID];
    postCollected = !postCollected;
    postsCollection[this.data.currentPostID] = postCollected;
    //更新缓存
    wx.setStorageSync("posts_collected", postsCollection)
    this.setData({
      collected: postCollected
    });

    wx.showToast({
      title: postCollected ? '收藏成功' : '取消收藏',
      duration: 1000,
      icon: 'success'
    })
  },




  //用户点击分享
  onShareTap: function(event) {

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