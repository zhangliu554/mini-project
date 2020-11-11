// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    typeList: [],
    typeItemList: []
  },

  onChange(e) {
    // console.log(e.detail);
    this.handelItemList(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      typeList: [
        {
          id: 1,
          title: "手机数码",
          list: [
            { sid: 1, title: "小米", imgUrl: "../../images/type/phono/xiaomi.png" },
            { sid: 2, title: "华为", imgUrl: "../../images/type/phono/huawei.png" },
            { sid: 3, title: "iPhone", imgUrl: "../../images/type/phono/iphone.png" },
            { sid: 4, title: "魅族", imgUrl: "../../images/type/phono/meizu.png" },
            { sid: 5, title: "oppo", imgUrl: "../../images/type/phono/oppo.png" },
            { sid: 6, title: "三星", imgUrl: "../../images/type/phono/sung.png" },
            { sid: 7, title: "vivo", imgUrl: "../../images/type/phono/vivo.png" }
          ]
        },
        {
          id: 2,
          title: "家用电器",
          list: [
            { id: 1, title: "小米", imgUrl: "" },
            { id: 2, title: "小米", imgUrl: "" },
            { id: 3, title: "小米", imgUrl: "" },
            { id: 4, title: "小米", imgUrl: "" },
            { id: 5, title: "小米", imgUrl: "" },
            { id: 6, title: "小米", imgUrl: "" }
          ]
        },
        {
          id: 3,
          title: "电脑办公",
          list: [
            { id: 1, title: "小米", imgUrl: "" }
          ]
        },
        {
          id: 4,
          title: "汽车用品",
          list: [
            { id: 1, title: "小米", imgUrl: "" }
          ]
        },
        {
          id: 5,
          title: "男装",
          list: [
            { id: 1, title: "小米", imgUrl: "" }
          ]
        },
        {
          id: 6,
          title: "女装",
          list: [
            { id: 1, title: "小米", imgUrl: "" }
          ]
        },
        {
          id: 7,
          title: "钟表珠宝",
          list: [
            { id: 1, title: "小米", imgUrl: "" }
          ]
        },
        {
          id: 8,
          title: "内衣配饰",
          list: [
            { id: 1, title: "小米", imgUrl: "" }
          ]
        },
        {
          id: 9,
          title: "箱包手袋",
          list: [
            { id: 1, title: "小米", imgUrl: "" }
          ]
        }
      ]
    }),
    this.handelItemList(0)
  },
  handelItemList(index) {
      this.setData({
        typeItemList: this.data.typeList[index].list
      })
      // console.log(this.data.typeItemList);
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