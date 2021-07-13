Page({
  data: {
    dataList: [],
    imgUrl: "../../img/like.png"
  },
  
  getData(num = 5, page = 0) {
    wx.cloud.callFunction({
      name: "getList",
      data: {
        num: num,
        page: page
      }
    }).then(res =>{
      let oldData = this.data.dataList
      let newData = oldData.concat(res.result.data)
      this.setData({
        dataList: newData
      })
    })
  },
  
  //点击跳转到详情页
  clickRow(res) {
    let {id, idx} = res.currentTarget.dataset
    wx.cloud.callFunction({
      name: 'upList',
      data: {
        id: id
      }
    }).then(res => {
      let newData = this.data.dataList
      newData[idx].hits += 1;
      this.setData({
        dataList: newData
      })
    })

    // 通过id跳转到对应详情页面
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + res.currentTarget.dataset.id
    })
  },

  clickswiper1() {
    wx.navigateTo({
      url: '/pages/detail/detail?id=28ee4e3e60dc1e1226770ce555194efb'
    })
  },
  clickswiper2() {
    wx.navigateTo({
      url: '/pages/detail/detail?id=b00064a760dc7f3b23ed295d459674f2'
    })
  },
  clickswiper3() {
    wx.navigateTo({
      url: '/pages/detail/detail?id=b00064a760dc80d023ed740410a180cf'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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
    wx.showLoading({
      title: '正在加载中...',
      mask: true
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 500)
    let page = this.data.dataList.length
    this.getData(5, page)
    if(page == 12) {
      wx.showToast({
        title: '已加载全部',
        icon: 'success'
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})