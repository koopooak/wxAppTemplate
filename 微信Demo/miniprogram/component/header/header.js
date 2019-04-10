// component/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"头部"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:"头部组件"
  },


 
  /**
   * 组件的方法列表
   */
  methods: {
    changeTitle(){
      this.setData({
        msg: "组件"
      })
    },
     run() {
      console.log('run1')
    }
    ,
    parent(){
      this.triggerEvent('parent',"ssss")
    }

  }
})
