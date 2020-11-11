// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    new_list: [],
    like_list:[]
  },
  handelSearch() {
    wx.navigateTo({
      url: '/pages/index/search/search'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      background: ['../../images/swiper/1.jpg', '../../images/swiper/2.jpg', '../../images/swiper/3.jpg'],
      new_list: [
        {
          id: 1,
          title: "商品名称商品名称",
          imgUrl: '../../images/product/01.jpg',
          price: 100
        },
        {
          id: 2,
          title: "商品名称商品名称",
          imgUrl: '../../images/product/02.jpg',
          price: 100
        },
        {
          id: 3,
          title: "商品名称商品名称",
          imgUrl: '../../images/product/03.jpg',
          price: 100
        },
        {
          id: 4,
          title: "商品名称商品名称",
          imgUrl: '../../images/product/04.jpg',
          price: 100
        },
        {
          id: 5,
          title: "商品名称商品名称",
          imgUrl: '../../images/product/05.jpg',
          price: 100
        },
        {
          id: 6,
          title: "商品名称商品名称",
          imgUrl: '../../images/product/06.jpg',
          price: 100
        }
      ],
      like_list: [
        {
          id: 1,
          title: "商品名称商品名称商品名称商品名称商品名称商品名称",
          imgUrl: '../../images/product/10.jpg',
          price: 100
        },
        {
          id: 2,
          title: "商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称",
          imgUrl: '../../images/product/09.jpg',
          price: 100
        },
        {
          id: 3,
          title: "商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称",
          imgUrl: '../../images/product/08.jpg',
          price: 100
        },
        {
          id: 4,
          title: "商品名称商品名称商品名称商品名称商品名称商品名称",
          imgUrl: '../../images/product/07.jpg',
          price: 100
        },
        {
          id: 5,
          title: "商品名称商品名称商品名称商品名称商品名称商品名称",
          imgUrl: '../../images/product/06.jpg',
          price: 100
        },
        {
          id: 6,
          title: "商品名称商品名称商品名称商品名称",
          imgUrl: '../../images/product/05.jpg',
          price: 100
        },
        {
          id: 7,
          title: "商品名称商品名称商品名称商品名称商品名称商品名称",
          imgUrl: '../../images/product/04.jpg',
          price: 100
        },
        {
          id: 8,
          title: "商品名称商品名称商品名称商品名称商品名称商品名称",
          imgUrl: '../../images/product/03.jpg',
          price: 100
        },  {
          id: 9,
          title: "商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称",
          imgUrl: '../../images/product/02.jpg',
          price: 100
        }
        ,  {
          id: 10,
          title: "商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称",
          imgUrl: '../../images/product/01.jpg',
          price: 100
        }
      ]
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