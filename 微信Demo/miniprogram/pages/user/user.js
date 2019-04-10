// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      d:1500000000000,
      title:"我是用户头部"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getChildFun(){
    var header = this.selectComponent("#header")
    header.run();
  },
  run(e){
    console.log(e)

    console.log("USer")
  }
})