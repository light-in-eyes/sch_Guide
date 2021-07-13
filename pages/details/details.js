const db=wx.cloud.database()

Page({
  data:{
    detail:''
  },
  onLoad(options) {
    console.log(options.id)

    wx.cloud.database().collection("college")
      .doc(options.id)
      .get()
      .then(res => {
        console.log("学院详情页成功")
        console.log(res.data)
        this.setData({
          detail:res.data
        })
      })
      .catch(res => {
        console.log("学院详情页失败", res)
      })

      wx.cloud.database().collection("canteen")
      .doc(options.id)
      .get()
      .then(res => {
        console.log("食堂详情页成功")
        console.log(res.data)
        this.setData({
          detail:res.data
        })
      })
      .catch(res => {
        console.log("食堂详情页失败", res)
      })

      wx.cloud.database().collection("shop")
      .doc(options.id)
      .get()
      .then(res => {
        console.log("教学楼详情页成功")
        console.log(res.data)
        this.setData({
          detail:res.data
        })
      })
      .catch(res => {
        console.log("教学楼详情页失败", res)
      })

      wx.cloud.database().collection("sport")
      .doc(options.id)
      .get()
      .then(res => {
        console.log("操场详情页成功")
        console.log(res.data)
        this.setData({
          detail:res.data
        })
      })
      .catch(res => {
        console.log("操场详情页失败", res)
      })

      wx.cloud.database().collection("dormitory")
      .doc(options.id)
      .get()
      .then(res => {
        console.log("宿舍详情页成功")
        console.log(res.data)
        this.setData({
          detail:res.data
        })
      })
      .catch(res => {
        console.log("宿舍详情页失败", res)
      })
    }
})