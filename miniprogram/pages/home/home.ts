// pages/home/home.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList: [], // 首页轮播图列表
        gridList: [] // 九宫格数据
    },
    handleGrid(e:WechatMiniprogram.BaseEvent):void{
        const id = e.target.dataset.id
        const name = e.target.dataset.name
        wx.navigateTo({
            url:`/pages/shoplist/shoplist?id=${id}&name=${name}`
        })
    },
    // 获取首页轮播图数据
    getSwiperList(): void {
        wx.request({
            url: 'https://www.escook.cn/slides',
            method: 'GET',
            success: res => {
                this.setData({
                    swiperList: res.data as []
                })
            }
        })
    },
    // 获取九宫格数据
    getGridList(): void {
        wx.request({
            url: 'https://www.escook.cn/categories',
            method: 'GET',
            success: res => {
                this.setData({
                    gridList: res.data as []
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.getSwiperList()
        this.getGridList()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})