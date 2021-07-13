// pages/userInfo/userInfo.js
const app = getApp();
const db = wx.cloud.database();//连接数据库
const treeHoleContent = db.collection('treeHoleContent');//获取数据库的集合
const treeHoleUserInfo = db.collection('treeHoleUserInfo');//获取用户名和头像的数据库的集合
const treeHoleTalk = db.collection('treeHoleTalk');//获取用户名和头像的数据库的集合
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //canIUse: wx.canIUse('button.open-type.getUserInfo'),//获取用户的昵称和头像
    firstColor:"#979797",
    secendColor:"#000000",
    userIcon:'',
    userName:'',
    contentList:[],
    talkContent:'',//评论框内容
    talkUser:'',//评论框用户名
    talkMain:[],
    _openid:''
  },

  square_tab: function(){
    wx.redirectTo({
      url: '../square/square',
    })
  },

  addContent_tab: function () {
    wx.navigateTo({
      url: '../commit/commit',
    })
  },

  userInfo_tab: function(){/*由于是自己的tab栏 故不发生跳转*/
  //  wx.redirectTo({
 //     url: '../userInfo/userInfo',
 //   })
   },

   //获取数据库数据
  getData: function(){
    wx.showLoading({
      title: '数据加载中',
    })
    treeHoleContent.get().then(res=>{
      //console.log(res.data[0].userName)
      this.setData({
        contentList:this.data.contentList.concat(res.data).reverse(),  //获取云数据库的数据是按早的在前   但实际情况的排列应是晚的在前
      },res=>{
        wx.hideLoading();
      })
    })
    //获取评论信息
    treeHoleTalk.get().then(res=>{
      this.setData({
       talkMain:this.data.talkMain.concat(res.data).reverse(),//获取云数据库的数据是按早的在前   但实际情况的排列应是晚的在前     
      },res=>{
        wx.hideLoading()
      })
    })
  },

  //删除树洞block  
  delBtn:function(e){
    var item_id = e.currentTarget.dataset.id;
    wx.showModal({
        title: '提示',
        content: '确定要删除吗？',
        success: function (sure) {
          if(sure.confirm){
            treeHoleContent.doc(item_id).remove({
              success: res =>{
              // console.log(res.data)
                wx.redirectTo({
                  url: '../userInfo/userInfo',
                })
              }
            })
        }else{
          wx.showModal({
            title:'删除失败',
            icon:'none'
          })
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  /*  wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({  
            success(res) {
            // console.log(res.userInfo)
            }
          })
        }
      }
    })*/

    //获取用户名和头像
    treeHoleUserInfo.get().then(res=>{
     console.log(res.data[0])
      this.setData({
        userName: res.data[0].userName,
        userIcon: res.data[0].userIcon,
        _openid: res.data[0].id
      },res=>{
        wx.hideLoading();
      })
    })

  },

  /*//点击授权来获取用户的头像和昵称
  bindGetUserInfo(e) {
    //console.log(e.detail.userInfo);
    this.data.userName = e.detail.userInfo.nickName;
    console.log(this.data.userName);
    this.data.userIcon =e.detail.userInfo.avatarUrl;
  },*/

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