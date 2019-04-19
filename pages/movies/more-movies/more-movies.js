// pages/movies/more-movies/more-movies.js

var base_URL = getApp();
var util = require('../../../utils/utils.js')



Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: {},
    navigateTitle: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 接受上个页面传过来的参数
    var category = options.category;
    this.data.navigateTitle = category;
    // 获取当前页面的数据

    var url = "";
    if (category === "正在热映") {
      url = "/v2/movie/in_theaters";
    } else if (category === "即将上映") {
      url = "/v2/movie/coming_soon";
    } else if (category === "豆瓣Top250") {
      url = "/v2/movie/top250";
    }
    // 拼接URL
    var load_URL = base_URL.globalData.g_dbURL + url;
    // 请求数据
    var that = this;
    util.GetHttp(load_URL, this.precssMoviesData);
    // 封装网络请求
  },
  precssMoviesData: function (subjects) {
    var movies = [];
    for (var idx in subjects) {
      var subject = subjects[idx];
      // 处理title字 长度过长的问题
      var title = util.StringFormat(subject.title);
      // 构建一个新的字段
      var temp = {
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id,
        stars: util.ConvertToStarsArray(subject.rating.stars)
      };
      // 把存放数据的字段 push 给movies
      movies.push(temp);
    }
    // 设置数据
    this.setData({
      movies: movies
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: this.data.navigateTitle
    })
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