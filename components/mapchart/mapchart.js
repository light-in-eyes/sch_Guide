// components/mapchart/mapchart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    markers: Array,
    polyline: Array,
    latitude: Number,
    longitude: Number,
    tabs: Array,
    datalist:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    datalist: [],
    //学院信息及跳转
    // tabs: [{
    //     name: "计算机与信息工程学院",
    //     image: "../../image/jxl.png",
    //     url: "../inf/college/jsj/jsj",
    //     urldh: "../inf/collegenavigation/jsj/jsj"
    //   },
    //   {
    //     name: "经济与管理学院",
    //     image: "../../image/jxl.png",
    //     url: '../inf/college/jg/jg',
    //     urldh: "../inf/collegenavigation/jg/jg"
    //   },
    //   {
    //     name: "机械工程学院",
    //     image: "../../image/jxl.png",
    //     url: '../inf/college/jx/jx',
    //     urldh: "../inf/collegenavigation/jx/jx"
    //   },
    //   {
    //     name: "理学院",
    //     image: "../../image/jxl.png",
    //     url: '../inf/college/lxy/lxy',
    //     urldh: "../inf/collegenavigation/lxy/lxy"
    //   },
    //   {
    //     name: "马克思主义学院",
    //     image: "../../image/jxl.png",
    //     url: '../inf/college/mks/mks',
    //     urldh: "../inf/collegenavigation/mks/mks"
    //   },
    //   {
    //     name: "土木工程学院",
    //     image: "../../image/jxl.png",
    //     url: '../inf/college/tmgc/tmgc',
    //     urldh: "../inf/collegenavigation/tmgc/tmgc"
    //   },
    //   {
    //     name: "外国语学院",
    //     image: "../../image/jxl.png",
    //     url: '../inf/college/wgy/wgy',
    //     urldh: "../inf/collegenavigation/wgy/wgy"
    //   },
    //   {
    //     name: "建筑学院",
    //     image: "../../image/jxl.png",
    //     url: '../inf/college/jz/jz',
    //     urldh: "../inf/collegenavigation/jz/jz"
    //   }
    // ],
    // tabs2: [{
    //   name: "计算机与信息工程学院",
    //   image: "../../image/jxl.png",
    //   url: "../inf/college/jsj/jsj",
    //   urldh: "../inf/collegenavigation/jsj/jsj"
    // }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindcallouttap: function (e) {
      console.log("头上文字被点击", e)
    },
    test: function (event) {
      console.log(event)
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: (res) => {
          const latitude = res.latitude
          const longitude = res.longitude
          wx.openLocation({
            //终点
            latitude: event.currentTarget.dataset.item.latitude,
            longitude: event.currentTarget.dataset.item.longitude,
            address: event.currentTarget.dataset.item.name,
            scale: 18
          })

        }

      })
    },

    onLoad(options) {
    //学院数据库连接
    console.log(options.id)
    wx.cloud.database().collection('college')
      .get()
      .then(res => {
        console.log("学院详情页成功")
        console.log(res)
        this.setData({
          datalist_0: res.data
        })
      })
      .catch(res => {
        console.log("学院详情页失败", res)
      })
    //食堂数据库连接
    wx.cloud.database().collection('canteen')
      .get()
      .then(res => {
        console.log("食堂详情页成功")
        console.log(res)
        this.setData({
          datalist_1: res.data
        })
      })
      .catch(res => {
        console.log("食堂详情页失败", res)
      })
    //超市数据库连接
    wx.cloud.database().collection('shop')
      .get()
      .then(res => {
        console.log("超市详情页成功")
        console.log(res)
        this.setData({
          datalist_2: res.data
        })
      })
      .catch(res => {
        console.log("超市详情页失败", res)
      })
    //操场数据库连接
    wx.cloud.database().collection('sport')
      .get()
      .then(res => {
        console.log("操场详情页成功")
        console.log(res)
        this.setData({
          datalist_3: res.data
        })
      })
      .catch(res => {
        console.log("操场详情页失败", res)
      })
    //宿舍数据库连接
    wx.cloud.database().collection('dormitory')
      .get()
      .then(res => {
        console.log("宿舍详情页成功")
        console.log(res)
        this.setData({
          datalist_4: res.data
        })
      })
      .catch(res => {
        console.log("宿舍详情页失败", res)
      })
    },

    tz:function(event) {
      console.log(event)
      wx.navigateTo({
        url: '/pages/details/details?id=' + event.currentTarget.dataset.item._id
      })
    },

    navigate: function () {
      wx.navigateTo({
        url: '../inf/inf'
      })
    },

    wx_getLocation() {
      var myThis = this;
      console.log(myThis)
      wx.getLocation({
        //type: 'wgs84',
        type: 'gcj02',
        success(res) {
          myThis.setData({
            longitude: res.longitude,
            latitude: res.latitude,
            markers: [{
              id: 0,
              latitude: res.latitude,
              longitude: res.longitude,
              width: 20,
              height: 20,
              label: {
                content: "我在这里",
                color: "#000000",
                fontSize: 13,
                borderRadius: "5",
                bgColor: "#ffffff",
                padding: 10,
              }
            }],
          })
        }
      })
    }
  }
})