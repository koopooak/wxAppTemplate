#wxApp


豆瓣地址
http://t.yushu.im


*******
*******
*******
*******
相对路径前面不能添加 / 否则找不到
<!-- 相对路径 -->
<!-- <import src="post-item/post-item-template.wxml"/> -->
<!-- 绝对路径 -->
<import src="/pages/posts/post-item/post-item-template.wxml"/>
*******
*******
*******
*******



1.swiper组件
    滑块视图容器（里面一般放的是图片）

2.app.json里面的导航 标题配置

3.page页面 生命周期

4.数据绑定（核心知识）

5.数据绑定运算与逻辑

  wx:for 循环                        item 可以随意
    <block wx:for={{}}} wx:for-item="item">


6.AppData区域介绍
7.事件与事件对象
事件机制：
  产生事件---捕捉事件---回调函数----处理事件

  bind:tap  
      会出现冒泡连续事件 子元素 父元素都绑定事件的情况下 触发子元素的事件时  会向上冒泡  父元素绑定的事件也会触发事件。
      这个时候就用catch:tap给子元素绑定事件，则不会向上传递事件
  catch:tap
      阻止冒泡事件
  
8.缓存
9.列表渲染（核心知识）
  使用template 模板渲染列表
10.Template模板的使用（核心知识）
    只能对wxml 和wxss进行模板化
    js 则不能
    绑定事件  不可以在模板上


///////
如何设置缓存
    //不手动清除  会永远保存到小程序里
    同步设置缓存
    wx.setStorageSync(key, value)
    
    异步获取缓存
    wx.getStorage({
      key: 'posts_collected',
      success: function(res) {
        res.data  是返回的数据
    )}

  
交互反馈
  wx.showToast({
      title: "",
      duration:1000,
      icon:'success' or 'loading',
      success:function(){},
      complete:function(){}
    })
  wx.showModal({
    title: '收藏',
    content: '是否收藏该文章',
    showCancel:true,
    cancelText:'不收藏',
    success:function(res){
      // res.confirm 为ture时  用户点击确定
      if(res.confirm){

      } else{

      }
    }
  })
  wx.showActionSheet({

  });



