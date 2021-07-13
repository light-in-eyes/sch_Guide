const app = getApp();
const db=wx.cloud.database();//连接数据库
const treeHoleContent=db.collection('treeHoleContent');//连接数据库对应的容器
const treeHoleUserInfo = db.collection('treeHoleUserInfo');//获取用户名和头像的数据库的集合
const treeHoleTalk = db.collection('treeHoleTalk');//获取用户名和头像的数据库的集合
// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstColor:"#000000",
    secendColor:"#979797",
    iszan:[],//点过赞的id集合
    num:'',
    state:'',
    talkContent:'',//评论框内容
    talkUser:'',//评论框用户名
    list:[],
    talkMain:[]
  },
    pageData:{//collection.skip()方法是在多条数据的情况下为了实现分页方法
      skip:0,
      locationOnobj:{}
    },

  // 点赞函数  获取对应id
  clickLike:function(e){
    var shareid = e.currentTarget.dataset.id;
    this.zan(shareid);
    console.log(shareid); 
  },

  //处理函数    
 zan:function(item_id){
  var that=this;
  var cookie_id=wx.getStorageSync('zan')||[];//获取全部点赞的id
  console.log(cookie_id);
  
  for (var i = 0; i < that.data.list.length;i++){
    if (that.data.list[i]._id==item_id){//数据列表中有与之对应的id
      var num=that.data.list[i].likeNum;//当前点赞数
      if (cookie_id.includes(item_id)){//已经点过赞了，取消点赞
        for(var j in cookie_id){
          if(cookie_id[j]==item_id){
            cookie_id.splice(j,1);  //删除取消点赞的id
            //console.log('已经点过赞了');
            
          }
        }
        --num;  //数减1
        that.setData({
          [`list[${i}].likeNum`]:num,  
          num:num,       //es6模板语法，常规写法报错
          [`list[${i}.].state`]: 'false',
          state:false,    //我的数据中state为'false'是未点赞
        })
        wx.setStorageSync('zan', cookie_id);
        wx.showToast({
          title: "取消点赞!",
          icon: 'none'
        }) 
      }else{        //操作   
        //console.log('还没有点赞');
        ++num;    //数加1
        that.setData({
          [`list[${i}].likeNum`]: num,
          num:num,
          [`list[${i}.].state`]: 'true',
          state:true
        })
        cookie_id.unshift(item_id);   //新增赞的id
        wx.setStorageSync('zan', cookie_id);
        wx.showToast({
          title: "点赞成功!",
          icon: 'none'
        })
      }
      //和后台交互，后台数据要同步
      treeHoleContent.doc(item_id).update({//向数据库传递数据
        data:{ 
          likeNum:this.data.num,
          state:this.data.state}
      }).then(res1=>{  
        //console.log(res1)
          wx.showToast({
            title:"操作成功",
            icon:"success",
            success:res2=>{/*
              wx.redirectTo({
               url: '../square/square',
              })*/
            }
          })
      })
    }
  }
},

  square_tab: function(){/*由于是自己的tab栏 故不发生跳转*/
    //.redirectTo({
    //  url: 'url',
    //})
  },

  //底部的跳转发送页面功能
  addContent_tab: function () {
    wx.navigateTo({
      url: '../commit/commit',
    })
  },

   //底部的跳转我的页面功能
  userInfo_tab: function(){
    wx.redirectTo({
      url: '../userInfo/userInfo',
    })
  },

  //获取content数据库数据
  getData: function(){
    wx.showLoading({
      title: '数据加载中',
    })
    treeHoleContent.get().then(res=>{
      //console.log(res);
      this.setData({
        list:this.data.list.concat(res.data).reverse(),//获取云数据库的数据是按早的在前   但实际情况的排列应是晚的在前     
      },res=>{
        wx.hideLoading()
      })
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    this.getData();
    treeHoleContent.get().then(res=>{
      success:res=>{
        //console.log(res);
       
        var iszan=that.data.iszan;
        //数据获取成功后，进行遍历，拿到所有已经点过赞的新闻id
        for(var i=0;i<res.data.info.length;i++){
            if(res.data.info[i].state='true'){    //根据自己的数据找到到已经点赞的
                iszan.push(res.data.info[i].id)
            }
        }
        that.setData({
            iszan:iszan
        })
        wx.setStorageSync('zan', iszan);  
    }
   //获取评论区的内容
    treeHoleTalk.get().then(res=>{
      this.setData({
       talkMain:this.data.talkMain.concat(res.data).reverse(),//获取云数据库的数据是按早的在前   但实际情况的排列应是晚的在前     
      },res=>{
        wx.hideLoading()
      })
    })
  })

   //获取用户名for评论
   treeHoleUserInfo.get().then(res=>{
    console.log(res)
    console.log(app.globalData.openid)
    var nowUser = res.data.length-1;
    for(var i=0;i<res.data.length;i++){
     if(res.data[i]._openid==app.globalData.openid){
       this.setData({
         userName: res.data[i].userName,
         userIcon: res.data[i].userIcon})
      }
    }
   /* this.setData({
      userName: res.data[nowUser].userName,
      userIcon: res.data[nowUser].userIcon
    })*/
    
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

  },

  //获取评论框中的内容
  getInputValue(e){
    //console.log(e.detail);
    var talkContent = e.detail.value;
    this.data.talkContent = talkContent;
  },

  //上传评论框中的内容
  sendTalk:function(e){
      var item_id=e.currentTarget.dataset.id;//获取id！
      treeHoleTalk.add({//向数据库传递数据
        data:{
          item_id:item_id,//为了把每个block对应的评论筛选(相当于sql操作的外键)
          talkContent:this.data.talkContent,
          talkUser:this.data.userName
        }
      }).then(res1=>{
      //  console.log(res1)
        wx.showToast({
          title:"发布成功",
          icon:"success",
          success:res2=>{
           wx.redirectTo({
             url: '../square/square',
           })
          }
        })
      })
    },

})