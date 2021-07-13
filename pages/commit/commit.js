// pages/commit/commit.js
const app = getApp();
const db=wx.cloud.database();//连接数据库
const treeHoleContent=db.collection('treeHoleContent');//连接数据库对应的容器
const treeHoleUserInfo = db.collection('treeHoleUserInfo');//获取用户名和头像的数据库的集合
wx.cloud.init();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    contentMain:"",
    image:[],
    fileIDs: [],//上传云存储后的返回值
    //注意此处image 和 fileIDs的区别是：image用于commit页面的图片加载(即image为临时路径) 而fileIDs为图片在别的页面展示(即fileIDs为土坯那在运存储的路径)
    nowDate:'',
    userName:'',
    userIcon:''
  },

  //获取文字框中的文字内容
    bindTextAreaBlur: function(e){
      this.data.contentMain = e.detail.value;
    },

   //点击选择本地图片
    selectImage: function(e){
      var image = this.data.image;
      //这个API直接就可以让选择本地的图片
      wx.chooseImage({
        count: 3,//表示最多可选择3张照片
        sourceType: ['album', 'camera'],
        success: res=>{

          image = res.tempFilePaths;//res.tempFilePaths直接就是一个数组  tempFilePaths为临时路径
          this.setData({//介样才能把data中的数据赋值，否则赋不了值 
            image:image
          })

          let promiseArr = [];
          for (let i = 0; i < this.data.image.length; i++) {
            promiseArr.push(new Promise((reslove, reject) => {
              let item = this.data.image[i];
              let suffix = /\.\w+$/.exec(item)[0];//正则表达式返回文件的扩展名
              //向云存储上传照片
              wx.cloud.uploadFile({
                cloudPath: new Date().getTime() + suffix, // 上传至云端的路径
                filePath: item, // 小程序临时文件路径
                success: res => {
                  this.setData({
                    fileIDs: this.data.fileIDs.concat(res.fileID)
                  });
                  //console.log(res.fileID)//输出上传后图片的返回地址
                  reslove();
                  wx.hideLoading();
                  wx.showToast({
                    title: "添加成功",
                  })
                },
                fail: res=>{
                  wx.hideLoading();
                  wx.showToast({
                    title: "上传失败",
                  })
                }
    
              })
            }));
          }   
          Promise.all(promiseArr).then(res => {//等数组都做完后做then方法
             //console.log("图片上传完成后再执行")
             this.setData({
              // image:[]
             })
           })
        }  
      })
    },

    //点击删除选中的照片
     delImage:function(e){
      //console.log(e.currentTarget.dataset.id); 
      var delItem = e.currentTarget.dataset.id;
      var image = this.data.image;
      var fileIDs = this.data.fileIDs;
      wx.showModal({
        title: '提示',
        content: '确定要删除此图片吗？',
        success: res=> {
         if (res.confirm) {
          //console.log('点击确定了');
          image.splice(delItem, 1);
          fileIDs.splice(delItem, 1);
         } else{
           //console.log('点击取消了');
          }
         this.setData({
          image:image,
          fileIDs: fileIDs
         });
        }
       })
    },

  //点击发送按钮将数据上传到云函数的数据库中
    send: function(e){
      let nowDate=this.getTime();//调用函数获取此时此刻时间
      this.setData({//用户点击发送时的时间
        nowDate:nowDate
      })
      treeHoleContent.add({//向数据库传递数据
        data:{
          contentMain:this.data.contentMain,//发布的主要内容
          image: this.data.fileIDs,//选择的图片
          sendTime:this.data.nowDate,//发送的时间 
          likeNum:0,//点赞数量默认为0
          state:false,//点赞状态默认为false，
          userName: this.data.userName,//用户的昵称
          userIcon: this.data.userIcon//用户的头像
        }
      }).then(res1=>{
        //console.log(res1)
        wx.showToast({
          title:"添加成功",
          icon:"success",
          success:res2=>{
            wx.redirectTo({
              url: '../square/square',
            })
          }
        })
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // console.log(this.data.userName);
   //获取用户名for评论
   treeHoleUserInfo.get().then(res=>{
    console.log(res)
    console.log(app.globalData.openid)
    for(var i=0;i<res.data.length;i++){
     if(res.data[i]._openid==app.globalData.openid){
       this.setData({
         userName: res.data[i].userName,
         userIcon: res.data[i].userIcon})
      }
    }
  })
  },

  getTime: function(e){
    let date=new Date();
    let year = date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    if(minute<10){
      minute= '0' + minute
    }
    let secend = date.getSeconds();
    if(secend<10){
      secend= '0' + secend
    }
    let nowDate=year+'-'+month+'-'+day+'---'+hour+':'+minute+':'+secend;
    //console.log(nowDate);
    return nowDate
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