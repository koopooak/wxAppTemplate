Page({
  // 跳转 阅读页面
  jumpPosts:function(){
    // 调用navigateTo 会保留当前页面  
    // 使用左上角返回能返回上级页面
    wx.navigateTo({
      url: '../posts/posts',
    })
    // 调用 redirectTo 会销毁当前页面  不会保留 所以无法
    // 返回前一个页面
    wx.redirectTo({
      url: '../posts/posts',
    })
  }



})