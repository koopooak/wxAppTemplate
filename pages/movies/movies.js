// pages/movies/movies.js


var util = require('../../utils/utils.js')


var base_URL = getApp();



Page({

  /**
   * 页面的初始数据
   */
  data: {
    intheat: {},
    comingSoon: {},
    top250: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var intheatURL = base_URL.globalData.g_dbURL + "/v2/movie/in_theaters" + "?start=0&count=3";

    var comingURL = base_URL.globalData.g_dbURL + "/v2/movie/coming_soon" + "?start=0&count=3";

    var topURL = base_URL.globalData.g_dbURL + "/v2/movie/top250" + "?start=0&count=3";

    console.log(intheatURL);

    this.getMoviesData(intheatURL, "intheat", "正在热映");
    this.getMoviesData(comingURL, "comingSoon", "即将上映");
    this.getMoviesData(topURL, "top250", "豆瓣Top250");
  },
  // 获取豆瓣电影数据
  getMoviesData: function(url, settedKey, categoryTitle) {
    var that = this;
    wx.request({
      url: url,
      header: {},
      success: function(res) {
        // 处理数据
        that.pressMoviesData(res.data.subjects, settedKey, categoryTitle);
      },
      fail: function(error) {
        console.log(error)
      }
    })
  },
  // 处理返回数据
  pressMoviesData: function(subjects, settedKey, categoryTitle) {
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
    var resultData = {};
    // 把settedKey作为resultData的key来给resultData的每一项复制
    // 把当前请求回来的数据赋值给resultData:{intheat:movies,categoryTitle:categoryTitle}
    resultData[settedKey] = {
      movies: movies,
      categoryTitle: categoryTitle
    };
    // 设置 data:{resultData:resultData}
    this.setData(resultData);
    console.log(resultData);
  },

  // 点击更多跳转到更多电影页面
  moreMovies: function(event) {
    // 获取点击事件传过来的参数 category 用来区分是哪个类型
    var category = event.currentTarget.dataset.category
    // 跳转页面的时候传参
    wx.navigateTo({
      url: 'more-movies/more-movies?category=' + category,
    })
  }
})