// //index.js
// const app = getApp()

// Page({
//   data: {
//     //选项卡
//     navbar: ['学院', '食堂/超市', '教学楼', '操场', '宿舍'],
//     currentTab: 0,

//     //初始地图地图
//     latitude: 39.094968,
//     longitude: 117.095444,

//     datalist: [],

//     //线段连线（突出学校位置）
//     polyline: [{
//       points: [{
//           latitude: 39.088938,
//           longitude: 117.094524
//         },
//         {
//           latitude: 39.089297,
//           longitude: 117.094514
//         },
//         {
//           latitude: 39.090877,
//           longitude: 117.094496
//         },
//         {
//           latitude: 39.091974,
//           longitude: 117.094485
//         },
//         {
//           latitude: 39.092782,
//           longitude: 117.094497
//         },
//         {
//           latitude: 39.093449,
//           longitude: 117.09447
//         },
//         {
//           latitude: 39.094235,
//           longitude: 117.094467
//         },
//         {
//           latitude: 39.094197,
//           longitude: 117.091257
//         },
//         {
//           latitude: 39.099479,
//           longitude: 117.091105
//         },
//         {
//           latitude: 39.099474,
//           longitude: 117.098737
//         },
//         {
//           latitude: 39.088945,
//           longitude: 117.098778
//         },
//         {
//           latitude: 39.088938,
//           longitude: 117.094524
//         }
//       ],
//       color: "#FF0000DD",
//       width: 3,
//       dottedLine: true
//     }],

//         //标记点
//         markers_0: [{
//           iconPath: "../../image/jxl.png",
//           id: 1,
//           latitude: 39.091331,
//           longitude: 117.09802,
//           width: 20,
//           height: 20,
//           title: '理学院/经管学院'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 2,
//           latitude: 39.098329,
//           longitude: 117.097598,
//           width: 20,
//           height: 20,
//           title: '计算机学院'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 3,
//           latitude: 39.098757,
//           longitude: 117.097776,
//           width: 20,
//           height: 20,
//           title: '计算中心'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 4,
//           latitude: 39.096233,
//           longitude: 117.097521,
//           width: 20,
//           height: 20,
//           title: '外国语学院/马克思主义学院'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 5,
//           latitude: 39.099068,
//           longitude: 117.09764,
//           width: 20,
//           height: 20,
//           title: '控制学院'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 6,
//           latitude: 39.097687,
//           longitude: 117.09758,
//           width: 20,
//           height: 20,
//           title: '城市艺术学院'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 7,
//           latitude: 39.090202,
//           longitude: 117.096137,
//           width: 20,
//           height: 20,
//           title: '材料学院'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 8,
//           latitude: 39.090202,
//           longitude: 117.096137,
//           width: 20,
//           height: 20,
//           title: '能源学院'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 9,
//           latitude: 39.094571,
//           longitude: 117.0977,
//           width: 20,
//           height: 20,
//           title: '国际教育学院'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 10,
//           latitude: 39.095501,
//           longitude: 117.09763,
//           width: 20,
//           height: 20,
//           title: '土木工程学院'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 11,
//           latitude: 39.096941,
//           longitude: 117.097484,
//           width: 20,
//           height: 20,
//           title: '建筑学院'
//         }
  
//       ],
  
//       markers_1: [{
//           iconPath: "../../image/食堂.png",
//           id: 0,
//           latitude: 39.092453,
//           longitude: 117.095271,
//           width: 20,
//           height: 20,
//           title: '第一食堂'
//         },
//         {
//           iconPath: "../../image/食堂.png",
//           id: 1,
//           latitude: 39.096192,
//           longitude: 117.094051,
//           width: 20,
//           height: 20,
//           title: '第二食堂'
//         },
//         {
//           iconPath: "../../image/超市.png",
//           id: 2,
//           latitude: 39.094089,
//           longitude: 117.096702,
//           width: 20,
//           height: 20,
//           title: '煦园超市'
//         },
//         {
//           iconPath: "../../image/超市.png",
//           id: 3,
//           latitude: 39.096092,
//           longitude: 117.093838,
//           width: 20,
//           height: 20,
//           title: '生活服务中心'
//         },
//       ],
  
//       markers_2: [
//         {
//           iconPath: "../../image/jxl.png",
//           id: 0,
//           latitude: 39.098521,
//           longitude: 117.09592,
//           width: 20,
//           height: 20,
//           title: '现教—A区'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 1,
//           latitude: 39.09819,
//           longitude: 117.096403,
//           width: 20,
//           height: 20,
//           title: '现教—B区'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 2,
//           latitude: 39.098201,
//           longitude: 117.09549,
//           width: 20,
//           height: 20,
//           title: '现教—C区'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 3,
//           latitude: 39.090281,
//           longitude: 117.096201,
//           width: 20,
//           height: 20,
//           title: '主楼'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 4,
//           latitude: 39.090671,
//           longitude: 117.096631,
//           width: 20,
//           height: 20,
//           title: '东配'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 5,
//           latitude: 39.090741,
//           longitude: 117.09574,
//           width: 20,
//           height: 20,
//           title: '西配'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 6,
//           latitude: 39.090098,
//           longitude: 117.096454,
//           width: 20,
//           height: 20,
//           title: '东裙'
//         },
//         {
//           iconPath: "../../image/jxl.png",
//           id: 7,
//           latitude: 39.090091,
//           longitude: 117.095631,
//           width: 20,
//           height: 20,
//           title: '西裙'
//         }
  
//       ],
  
//       markers_3: [
//         {
//           iconPath: "../../image/运动.png",
//           id: 0,
//           latitude: 39.092238,
//           longitude: 117.098104,
//           width: 20,
//           height: 20,
//           title: '乒乓羽毛球馆'
//         },
//         {
//           iconPath: "../../image/运动.png",
//           id: 1,
//           latitude: 39.09287,
//           longitude: 117.09785,
//           width: 20,
//           height: 20,
//           title: '风雨操场'
//         },
//         {
//           iconPath: "../../image/运动.png",
//           id: 2,
//           latitude: 39.097,
//           longitude: 117.092162,
//           width: 20,
//           height: 20,
//           title: '新操场'
//         },
//         {
//           iconPath: "../../image/运动.png",
//           id: 3,
//           latitude: 39.098802,
//           longitude: 117.092189,
//           width: 20,
//           height: 20,
//           title: '体育馆'
//         }
  
//       ],
  
//       markers_4: [
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 0,
//           latitude: 39.094403,
//           longitude: 117.093901,
//           width: 20,
//           height: 20,
//           title: '怀仁斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 1,
//           latitude: 39.094421,
//           longitude: 117.09329,
//           width: 20,
//           height: 20,
//           title: '知义斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 2,
//           latitude: 39.094431,
//           longitude: 117.09296,
//           width: 20,
//           height: 20,
//           title: '崇礼斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 3,
//           latitude: 39.094433,
//           longitude: 117.092331,
//           width: 20,
//           height: 20,
//           title: '明智斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 4,
//           latitude: 39.094741,
//           longitude: 117.091875,
//           width: 20,
//           height: 20,
//           title: '定信斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 5,
//           latitude: 39.094962,
//           longitude: 117.092221,
//           width: 20,
//           height: 20,
//           title: '慎思斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 6,
//           latitude: 39.094973,
//           longitude: 117.092881,
//           width: 20,
//           height: 20,
//           title: '博学斋'
//         },
//         {
//           iconPath: "../../image/girl_ss.png",
//           id: 7,
//           latitude: 39.094971,
//           longitude: 117.093061,
//           width: 20,
//           height: 20,
//           title: '明德斋'
//         },
//         {
//           iconPath: "../../image/girl_ss.png",
//           id: 8,
//           latitude: 39.095001,
//           longitude: 117.09394,
//           width: 20,
//           height: 20,
//           title: '思源斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 9,
//           latitude: 39.095493,
//           longitude: 117.093394,
//           width: 20,
//           height: 20,
//           title: '求实斋'
//         },
//         {
//           iconPath: "../../image/girl_ss.png",
//           id: 10,
//           latitude: 39.095463,
//           longitude: 117.09266,
//           width: 20,
//           height: 20,
//           title: '重能斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 11,
//           latitude: 39.095492,
//           longitude: 117.091826,
//           width: 20,
//           height: 20,
//           title: '致知斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 12,
//           latitude: 39.095821,
//           longitude: 117.092401,
//           width: 20,
//           height: 20,
//           title: '方正斋'
//         },
//         {
//           iconPath: "../../image/girl_ss.png",
//           id: 13,
//           latitude: 39.095861,
//           longitude: 117.09326,
//           width: 20,
//           height: 20,
//           title: '笃行斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 14,
//           latitude: 39.096365,
//           longitude: 117.091823,
//           width: 20,
//           height: 20,
//           title: '焠真斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 15,
//           latitude: 39.096331,
//           longitude: 117.09268,
//           width: 20,
//           height: 20,
//           title: '骏善斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 16,
//           latitude: 39.096293,
//           longitude: 117.093281,
//           width: 20,
//           height: 20,
//           title: '洵美斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 17,
//           latitude: 39.093546,
//           longitude: 117.09537,
//           width: 20,
//           height: 20,
//           title: '学智斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 18,
//           latitude: 39.093522,
//           longitude: 117.095011,
//           width: 20,
//           height: 20,
//           title: '健体斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 19,
//           latitude: 39.093871,
//           longitude: 117.094861,
//           width: 20,
//           height: 20,
//           title: '启能斋'
//         },
//         {
//           iconPath: "../../image/girl_ss.png",
//           id: 20,
//           latitude: 39.093961,
//           longitude: 117.09528,
//           width: 20,
//           height: 20,
//           title: '乐群斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 21,
//           latitude: 39.093951,
//           longitude: 117.09565,
//           width: 20,
//           height: 20,
//           title: '爱劳斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 22,
//           latitude: 39.093232,
//           longitude: 117.09609,
//           width: 20,
//           height: 20,
//           title: '立志斋'
//         },
//         {
//           iconPath: "../../image/girl_ss.png",
//           id: 23,
//           latitude: 39.092901,
//           longitude: 117.09605,
//           width: 20,
//           height: 20,
//           title: '有为斋'
//         },
//         {
//           iconPath: "../../image/boy_ss.png",
//           id: 24,
//           latitude: 39.092922,
//           longitude: 117.096531,
//           width: 20,
//           height: 20,
//           title: '成德斋'
//         },
//         {
//           iconPath: "../../image/girl_ss.png",
//           id: 25,
//           latitude: 39.092911,
//           longitude: 117.09683,
//           width: 20,
//           height: 20,
//           title: '思齐斋'
//         }
//       ],
//   },

//   onLoad(options) {
//     //学院数据库连接
//     console.log(options.id)
//     wx.cloud.database().collection('college')
//       .get()
//       .then(res => {
//         console.log("学院详情页成功")
//         console.log(res)
//         this.setData({
//           datalist_0: res.data
//         })
//       })
//       .catch(res => {
//         console.log("学院详情页失败", res)
//       })
//     //食堂数据库连接
//     wx.cloud.database().collection('canteen')
//       .get()
//       .then(res => {
//         console.log("食堂详情页成功")
//         console.log(res)
//         this.setData({
//           datalist_1: res.data
//         })
//       })
//       .catch(res => {
//         console.log("食堂详情页失败", res)
//       })
//     //超市数据库连接
//     wx.cloud.database().collection('shop')
//       .get()
//       .then(res => {
//         console.log("超市详情页成功")
//         console.log(res)
//         this.setData({
//           datalist_2: res.data
//         })
//       })
//       .catch(res => {
//         console.log("超市详情页失败", res)
//       })
//     //操场数据库连接
//     wx.cloud.database().collection('sport')
//       .get()
//       .then(res => {
//         console.log("操场详情页成功")
//         console.log(res)
//         this.setData({
//           datalist_3: res.data
//         })
//       })
//       .catch(res => {
//         console.log("操场详情页失败", res)
//       })
//     //宿舍数据库连接
//     wx.cloud.database().collection('dormitory')
//       .get()
//       .then(res => {
//         console.log("宿舍详情页成功")
//         console.log(res)
//         this.setData({
//           datalist_4: res.data
//         })
//       })
//       .catch(res => {
//         console.log("宿舍详情页失败", res)
//       })
//   },
//   tz(event) {
//     console.log("获取数据" + event)
//   },

//   bindcallouttap: function (e) {
//     console.log("头上文字被点击", e)
//   },
//   //选项卡点击事件
//   navbarTap: function (e) {
//     console.log("选项卡被点击！")
//     const mapCtx = wx.createMapContext('map', this);
//     this.setData({
//       currentTab: e.currentTarget.dataset.idx
//     })
//   },

//   test: function (event) {
//     console.log(event)
//     wx.getLocation({
//       type: 'gcj02', //返回可以用于wx.openLocation的经纬度
//       success: (res) => {
//         const latitude = res.latitude
//         const longitude = res.longitude
//         wx.openLocation({
//           //终点
//           latitude: event.currentTarget.dataset.item.latitude,
//           longitude: event.currentTarget.dataset.item.longitude,
//           address: event.currentTarget.dataset.item.name,
//           scale: 18
//         })
//       }
//     })
//   },

//   //获取当前位置
//   wx_getLocation() {
//     var myThis = this;
//     wx.getLocation({
//       //type: 'wgs84',
//       type: 'gcj02',
//       success(res) {
//         myThis.setData({
//           longitude: res.longitude,
//           latitude: res.latitude,
//           markers: [{
//             id: 0,
//             latitude: res.latitude,
//             longitude: res.longitude,
//             width: 20,
//             height: 20,
//             label: {
//               content: "我在这里",
//               color: "#000000",
//               fontSize: 13,
//               borderRadius: "5",
//               bgColor: "#ffffff",
//               padding: 10,
//             }
//           }],
//         })
//       }
//     })
//   },

// })


//index.js
const app = getApp()

Page({
  data: {
    //选项卡
    navbar: ['学院', '食堂/超市', '教学楼', '操场', '宿舍'],
    currentTab: 0,

    //初始地图地图
    latitude: 39.094968,
    longitude: 117.095444,

    datalist: [],

    //线段连线（突出学校位置）
    polyline: [{
      points: [{
          latitude: 39.088938,
          longitude: 117.094524
        },
        {
          latitude: 39.089297,
          longitude: 117.094514
        },
        {
          latitude: 39.090877,
          longitude: 117.094496
        },
        {
          latitude: 39.091974,
          longitude: 117.094485
        },
        {
          latitude: 39.092782,
          longitude: 117.094497
        },
        {
          latitude: 39.093449,
          longitude: 117.09447
        },
        {
          latitude: 39.094235,
          longitude: 117.094467
        },
        {
          latitude: 39.094197,
          longitude: 117.091257
        },
        {
          latitude: 39.099479,
          longitude: 117.091105
        },
        {
          latitude: 39.099474,
          longitude: 117.098737
        },
        {
          latitude: 39.088945,
          longitude: 117.098778
        },
        {
          latitude: 39.088938,
          longitude: 117.094524
        }
      ],
      color: "#FF0000DD",
      width: 3,
      dottedLine: true
    }],

    //标记点
    markers_0: [{
        iconPath: "../../image/jxl.png",
        id: 1,
        latitude: 39.091331,
        longitude: 117.09802,
        width: 20,
        height: 20,
        title: '理学院/经管学院'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 2,
        latitude: 39.098329,
        longitude: 117.097598,
        width: 20,
        height: 20,
        title: '计算机学院'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 3,
        latitude: 39.098757,
        longitude: 117.097776,
        width: 20,
        height: 20,
        title: '计算中心'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 4,
        latitude: 39.096233,
        longitude: 117.097521,
        width: 20,
        height: 20,
        title: '外国语学院/马克思主义学院'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 5,
        latitude: 39.099068,
        longitude: 117.09764,
        width: 20,
        height: 20,
        title: '控制学院'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 6,
        latitude: 39.097687,
        longitude: 117.09758,
        width: 20,
        height: 20,
        title: '城市艺术学院'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 7,
        latitude: 39.090202,
        longitude: 117.096137,
        width: 20,
        height: 20,
        title: '材料学院'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 8,
        latitude: 39.090202,
        longitude: 117.096137,
        width: 20,
        height: 20,
        title: '能源学院'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 9,
        latitude: 39.094571,
        longitude: 117.0977,
        width: 20,
        height: 20,
        title: '国际教育学院'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 10,
        latitude: 39.095501,
        longitude: 117.09763,
        width: 20,
        height: 20,
        title: '土木工程学院'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 11,
        latitude: 39.096941,
        longitude: 117.097484,
        width: 20,
        height: 20,
        title: '建筑学院'
      }

    ],

    markers_1: [{
        iconPath: "../../image/食堂.png",
        id: 0,
        latitude: 39.092453,
        longitude: 117.095271,
        width: 20,
        height: 20,
        title: '第一食堂'
      },
      {
        iconPath: "../../image/食堂.png",
        id: 1,
        latitude: 39.096192,
        longitude: 117.094051,
        width: 20,
        height: 20,
        title: '第二食堂'
      }
    ],

    markers_2: [
      {
        iconPath: "../../image/jxl.png",
        id: 0,
        latitude: 39.098521,
        longitude: 117.09592,
        width: 20,
        height: 20,
        title: '现教—A区'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 1,
        latitude: 39.09819,
        longitude: 117.096403,
        width: 20,
        height: 20,
        title: '现教—B区'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 2,
        latitude: 39.098201,
        longitude: 117.09549,
        width: 20,
        height: 20,
        title: '现教—C区'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 3,
        latitude: 39.090281,
        longitude: 117.096201,
        width: 20,
        height: 20,
        title: '主楼'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 4,
        latitude: 39.090671,
        longitude: 117.096631,
        width: 20,
        height: 20,
        title: '东配'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 5,
        latitude: 39.090741,
        longitude: 117.09574,
        width: 20,
        height: 20,
        title: '西配'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 6,
        latitude: 39.090098,
        longitude: 117.096454,
        width: 20,
        height: 20,
        title: '东裙'
      },
      {
        iconPath: "../../image/jxl.png",
        id: 7,
        latitude: 39.090091,
        longitude: 117.095631,
        width: 20,
        height: 20,
        title: '西裙'
      }

    ],

    markers_3: [{
        iconPath: "../../image/运动.png",
        id: 0,
        latitude: 39.092238,
        longitude: 117.098104,
        width: 20,
        height: 20,
        title: '乒乓羽毛球馆'
      },
      {
        iconPath: "../../image/运动.png",
        id: 1,
        latitude: 39.09287,
        longitude: 117.09785,
        width: 20,
        height: 20,
        title: '风雨操场'
      },
      {
        iconPath: "../../image/运动.png",
        id: 2,
        latitude: 39.097,
        longitude: 117.092162,
        width: 20,
        height: 20,
        title: '新操场'
      },
      {
        iconPath: "../../image/运动.png",
        id: 3,
        latitude: 39.098802,
        longitude: 117.092189,
        width: 20,
        height: 20,
        title: '体育馆'
      }

    ],

    markers_4: [{
      iconPath: "../../image/boy_ss.png",
      id: 0,
      latitude: 39.094403,
      longitude: 117.093901,
      width: 20,
      height: 20,
      title: '怀仁斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 1,
      latitude: 39.094421,
      longitude: 117.09329,
      width: 20,
      height: 20,
      title: '知义斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 2,
      latitude: 39.094431,
      longitude: 117.09296,
      width: 20,
      height: 20,
      title: '崇礼斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 3,
      latitude: 39.094433,
      longitude: 117.092331,
      width: 20,
      height: 20,
      title: '明智斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 4,
      latitude: 39.094741,
      longitude: 117.091875,
      width: 20,
      height: 20,
      title: '定信斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 5,
      latitude: 39.094962,
      longitude: 117.092221,
      width: 20,
      height: 20,
      title: '慎思斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 6,
      latitude: 39.094973,
      longitude: 117.092881,
      width: 20,
      height: 20,
      title: '博学斋'
    },
    {
      iconPath: "../../image/girl_ss.png",
      id: 7,
      latitude: 39.094971,
      longitude: 117.093061,
      width: 20,
      height: 20,
      title: '明德斋'
    },
    {
      iconPath: "../../image/girl_ss.png",
      id: 8,
      latitude: 39.095001,
      longitude: 117.09394,
      width: 20,
      height: 20,
      title: '思源斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 9,
      latitude: 39.095493,
      longitude: 117.093394,
      width: 20,
      height: 20,
      title: '求实斋'
    },
    {
      iconPath: "../../image/girl_ss.png",
      id: 10,
      latitude: 39.095463,
      longitude: 117.09266,
      width: 20,
      height: 20,
      title: '重能斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 11,
      latitude: 39.095492,
      longitude: 117.091826,
      width: 20,
      height: 20,
      title: '致知斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 12,
      latitude: 39.095821,
      longitude: 117.092401,
      width: 20,
      height: 20,
      title: '方正斋'
    },
    {
      iconPath: "../../image/girl_ss.png",
      id: 13,
      latitude: 39.095861,
      longitude: 117.09326,
      width: 20,
      height: 20,
      title: '笃行斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 14,
      latitude: 39.096365,
      longitude: 117.091823,
      width: 20,
      height: 20,
      title: '焠真斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 15,
      latitude: 39.096331,
      longitude: 117.09268,
      width: 20,
      height: 20,
      title: '骏善斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 16,
      latitude: 39.096293,
      longitude: 117.093281,
      width: 20,
      height: 20,
      title: '洵美斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 17,
      latitude: 39.093546,
      longitude: 117.09537,
      width: 20,
      height: 20,
      title: '学智斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 18,
      latitude: 39.093522,
      longitude: 117.095011,
      width: 20,
      height: 20,
      title: '健体斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 19,
      latitude: 39.093871,
      longitude: 117.094861,
      width: 20,
      height: 20,
      title: '启能斋'
    },
    {
      iconPath: "../../image/girl_ss.png",
      id: 20,
      latitude: 39.093961,
      longitude: 117.09528,
      width: 20,
      height: 20,
      title: '乐群斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 21,
      latitude: 39.093951,
      longitude: 117.09565,
      width: 20,
      height: 20,
      title: '爱劳斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 22,
      latitude: 39.093232,
      longitude: 117.09609,
      width: 20,
      height: 20,
      title: '立志斋'
    },
    {
      iconPath: "../../image/girl_ss.png",
      id: 23,
      latitude: 39.092901,
      longitude: 117.09605,
      width: 20,
      height: 20,
      title: '有为斋'
    },
    {
      iconPath: "../../image/boy_ss.png",
      id: 24,
      latitude: 39.092922,
      longitude: 117.096531,
      width: 20,
      height: 20,
      title: '成德斋'
    },
    {
      iconPath: "../../image/girl_ss.png",
      id: 25,
      latitude: 39.092911,
      longitude: 117.09683,
      width: 20,
      height: 20,
      title: '思齐斋'
    }
  ],


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
  tz(event) {
    console.log("获取数据" + event)
  },

  bindcallouttap: function (e) {
    console.log("头上文字被点击", e)
  },
  //选项卡点击事件
  navbarTap: function (e) {
    console.log("选项卡被点击！")
    const mapCtx = wx.createMapContext('map', this);
    // mapCtx.moveToLocation({
    //   latitude: 39.095802,
    //   longitude: 117.094131
    // }),
    // mapCtx.openMapApp({
    //     latitude: 39.098329,
    //     longitude: 117.097598,
    //     destination: "sss"
    //   }),
      // mapCtx.translateMarker({
      //   markerId:1,
      //   destination:{
      //     latitude: 39.095802,
      //     longitude: 117.094131
      //   },
      //   autoRotate:true,
      //   rotate:0
      // })
      this.setData({
        currentTab: e.currentTarget.dataset.idx
      })

  },

  // markertap: function (event) {
  //   this.setData({
  //     isSelectedBuildType: event.currentTarget.id,
  //     isSelectedBuild: 0
  //   });
  // },

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

  //获取当前位置
  wx_getLocation() {
    var myThis = this;
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
})