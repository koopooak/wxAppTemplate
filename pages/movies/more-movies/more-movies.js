// pages/movies/more-movies/more-movies.js

var base_URL = getApp();
var util = require('../../../utils/utils.js')



Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: {},
    navigateTitle: "",
    requestMoreURL:"",
    totalCount:0,
    isEmpty:true
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

    // 保存当前请求的URL，后续加载更多使用
    this.data.requestMoreURL = load_URL;

    // 封装网络请求
    util.GetHttp(load_URL, this.precssMoviesData);
    
  },
  // 加载更多
  onScrolltolower:function(event){
    // 拼接加载更多的URL
    var moreUlr = this.data.requestMoreURL + "?start="+ this.data.totalCount +"&count=20";
    // 加载更多
    util.GetHttp(moreUlr, this.precssMoviesData);
    wx.showNavigationBarLoading();
  },
  //下拉加载更多 
  onPullDownRefresh:function(event){
    console.log("aaa");
    var pullURL = this.data.requestMoreURL + "?start=0&count=20";
    this.data.movies = [];
    this.data.isEmpty = true;
    util.GetHttp(pullURL, this.precssMoviesData);
    wx.showNavigationBarLoading();
  },

  // 加载数据之后的回调方法
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

    var totalMovies = [];
    // 如果不是空的  就证明有数据 不是第一次加载  就在原来的数据后面追加数据。
    // 如果是空的 就是第一次加载数据
    if (!this.data.isEmpty){
      totalMovies = this.data.movies.concat(movies);
    }else{
      totalMovies= movies;
      this.data.isEmpty = false;
    }
    // 设置数据
    this.setData({
      movies: totalMovies
    });

    // 每次请求完增加下次请求的20条
    this.data.totalCount += 20;
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },

  // 跳转电影详情页面
  onMovieDeatils:function(event){
    wx.navigateTo({
      url: '/pages/movies/movies-details/movies-details',
    })
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