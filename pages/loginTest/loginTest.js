// pages/loginTest/loginTest.js
const app = getApp()
const db = wx.cloud.database();//连接数据库
const treeHoleUserInfo = db.collection('treeHoleUserInfo');//获取数据库的集合
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),//获取用户的昵称和头像
    userName:'',
    userIcon:'',
    userinfo:[],
    openid:''
  },

    // 新版获取用户信息
    getUserProfile(e) {
      var that = this
      wx.getUserProfile({
          desc: '用于完善用户资料',
          success: (res) => {
              this.setData({
                  userInfo: res.userInfo
              })
              // 将得到的用户信息 userInfo 保存到缓存中
              wx.setStorageSync('userInfo', this.data.userInfo)
              // 输出检查看看
              console.log("getuserProfile：", res.userInfo)
              //调用自定义的 login() 方法访问数据库，将用户信息保存到数据库
              that.login()
          }
      })
  },
  // 登录
  login() {
    // 获取缓存中的用户信息
      const userInfo = wx.getStorageSync('userInfo');
      console.log("userInfo:", userInfo);
      console.log(userInfo.nickName);
      treeHoleUserInfo.add({
        data:{  
           userName:userInfo.nickName,
           userIcon:userInfo.avatarUrl,
          // id:res.data.openid//把获取到的openId以id形式上传(_openid不可上传)
        }
      })
      
      wx.navigateTo({
        url: '../school/school'
      })
   // 调用云函数赋值全局变量的openid
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        console.log(app.globalData.openid)
      }
      })
     
  // 如果缓存中有用户信息
      if (userInfo) {
          //  获取微信小程序登陆成功后的code
          wx.login({
              timeout: 500,
              success: (result) => {
                  // 1 成功取得 code
                  const {
                      code
                  } = result;
                  console.log("code:", code)
                  
                  // 2 发送请求到后台 换取 openid
                  // 这里 request() 是自己封装的 es6 的 promise 的方式，读者可以直接使用 wx.request() 
                  /*request({
                          url: app.globalData.url + '/index.php/code',
                          data: {
                              code: code
                          },
                          method: 'get',
                      })              
                      .then(res => {
                          this.setData({
                              openid: res.data.openid,
                          })
                          //将 openid 保存到缓存中
                          wx.setStorage({
                              key: 'openid',
                              data: res.data.openid
                          })
                          // 将用户信息保存到数据库表中
                          treeHoleUserInfo.doc('b00064a760991cf9164dde86591b647f').update({
                            data:{  
                               userName:userInfo.nickName,
                               userIcon:userInfo.avatarUrl,
                               id:res.data.openid//把获取到的openId以id形式上传(_openid不可上传)
                            }
                          })
                          
                             .then(res => {
                                  console.log(res)
                                  if (res.data.msg == "success") {
                                      wx.showModal({
                                          content: '登录成功',
                                          showCancel: false,
                                      })
                                      // 登录成功后刷新当前页面，以显示用户信息和用户数据
                                      this.onShow();                         
                                  }
                              })
                      })*/
              },
          })
      }
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /*onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        treeHoleUserInfo.doc('b00064a760991cf9164dde86591b647f').update({
          data:{
             id:app.globalData.openid//把获取到的openId以id形式上传(_openid不可上传)
          }
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  
    wx.navigateTo({
      //url: '../userConsole/userConsole',
      url: '../square/square'
    })
  },*/
    //点击授权来获取用户的头像和昵称
    bindGetUserInfo:function(e) {
      console.log( e.detail.userInfo.nickName);
      /*onsole.log( e.detail);
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
          已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({  
              success(res) {
                console.log(res.userInfo)
              }
            })
        
          }
        }
      })
      this.data.userName = e.detail.userInfo.nickName;
      console.log(this.data.userName);
      this.data.userIcon =e.detail.userInfo.avatarUrl;
      var name = e.detail.userInfo.nickName;
      var icon = e.detail.userInfo.avatarUrl;
      wx.showModal({
        title: '提示',
        content: '确定要授权吗？',
        success:function(sure){
          if(sure.confirm){
          // console.log(app.globalData.openid)
            treeHoleUserInfo.doc('b00064a760991cf9164dde86591b647f').update({
              data:{
                 id:app.globalData.openid,//把获取到的openId以id形式上传(_openid不可上传),
                 userName:name,
                 userIcon:icon
              }
            }).then(res=>{
              console.log(res);
            })
            wx.redirectTo({
              url: '../square/square',
            })
          }else{
            wx.showModal({
              title:'授权失败',
              icon:'icon'
            })
          }
        }
      })*/   
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