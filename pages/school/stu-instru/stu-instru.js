const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    db.collection("school")
    .doc("79550af260dc13cf23152d012bf3aad3")
    .get()
    .then(res =>{
      console.log(res)
      this.setData({
        dataArr: res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})