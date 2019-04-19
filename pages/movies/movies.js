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

    this.getMoviesData(intheatURL, "intheat","正在热映");
    this.getMoviesData(comingURL, "comingSoon","即将上映");
    this.getMoviesData(topURL, "top250","豆瓣Top250");
  },

  getMoviesData: function(url, settedKey,categoryTitle) {
    var that = this;
    wx.request({
      url: url,
      header: {},
      success: function(res) {
        console.log(res);
        that.pressMoviesData(res.data.subjects, settedKey, categoryTitle);
      },
      fail: function(error) {
        console.log(error)
      }
    })
  },

  pressMoviesData: function (subjects, settedKey, categoryTitle) {
    var movies = [];
    for (var idx in subjects) {
      var subject = subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "..."
      }
      var temp = {
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id,
        stars: util.convertToStarsArray(subject.rating.stars)
      };
      movies.push(temp);
    }

    var resultData = {};
    resultData[settedKey] = {
      movies: movies,
      categoryTitle: categoryTitle
    };
    this.setData(resultData);
  }
})