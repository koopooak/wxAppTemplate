function ConvertToStarsArray(stars) {
  var num = stars.toString().substring(0, 1);
  var array = [];
  for (var i = 1; i <= 5; i++) {
    if (i <= num) {
      array.push(1);
    } else {
      array.push(0);
    }
  }
  return array;
}

// 封装网络请求
function GetHttp(url,callBack) {
  wx.showNavigationBarLoading();
  wx.request({
    url: url,
    method:"GET",
    success:function(res){
      callBack(res.data.subjects)
      wx.hideNavigationBarLoading();
    },
    fail: function(error) {
      console.log(error);
      wx.hideNavigationBarLoading();
    }
  })
}


// 处理字符串
function StringFormat(title){
  if (title.length >= 6) {
    title = title.substring(0, 6) + "..."
  }
  return title;
} 


module.exports = {
  ConvertToStarsArray: ConvertToStarsArray,
  GetHttp: GetHttp,
  StringFormat: StringFormat
}