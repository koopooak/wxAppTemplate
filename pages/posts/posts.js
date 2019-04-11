// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'Niv 19 2019',
    title:'正是虾肥蟹壮时'
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content = {
      date:"Nov 18 2019",
      title:'正是虾肥蟹壮时',
      img:{
        author_img: '/images/avatar/1.png',
        post_img: '/images/post/crab.png'
      },
      content:'用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。文件名不需要写文件后缀，框架会自动去寻找对于位置的 .json, .js, .wxml, .wxss 四个文件进行处理。',
      view_num:'112',
      collect_num:'96',
    }
    this.setData(post_content);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})