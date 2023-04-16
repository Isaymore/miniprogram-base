// pages/list/list.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        query: {
            id: '',
            name: ''
        },
        shopList: [],
        page: 1,
        pageSize: 10,
        total: 0,
        isLoading: false
    },
    getShopList(callback: Function): void {
        this.setData({
            isLoading: true
        })
        // 显示loading
        wx.showLoading({
            title: '加载中'
        })
        wx.request({
            url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
            method: 'GET',
            data: {
                _page: this.data.page,
                _limit: this.data.pageSize
            },
            success: (res: any) => {
                const arr = res.data
                this.setData({
                    total: +res.header['X-Total-Count'],
                    shopList: [...this.data.shopList, ...arr] as []
                })
            },
            complete: () => {
                // 关闭loading
                wx.hideLoading()
                this.setData({
                    isLoading: false
                })
                // 不直接写这里，因为页面初始化和上拉加载，不用调用关闭下拉刷新的方法
                // wx.stopPullDownRefresh()
                callback && callback()
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options: any) {
        this.setData({
            query: options
        })
        this.getShopList()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        wx.setNavigationBarTitle({
            title: this.data.query.name
        })
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
        // 重置列表为第一页的数据
        this.setData({
            page: 1,
            shopList: [],
            total: 0
        })
        // 重新发起数据请求
        this.getShopList(() => {
            wx.stopPullDownRefresh()
        })
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        // 总数据条数 <= 页码值 * 每页显示多少条数据，说明没有下一页数据
        if (this.data.total <= this.data.page * this.data.pageSize) {
            wx.showToast({
                title: '暂无更多数据~',
                icon: 'none'
            })
            return
        }
        // 判断是否正在加载当前页的数据
        // 如果为true，说明正在加载，不能继续加载下一页的数据
        if (this.data.isLoading) return
        // 页码值+1
        // this.data.page++
        this.setData({
            page: this.data.page + 1
        })
        // 获取下一页的数据
        this.getShopList()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})