// pages/contact/contact.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        colorList: [], // 随机颜色的列表
        // false 表示当前没有进行任何数据请求
        // true 表示当前正在进行数据请求
        isLoading: false // 节流阀
    },
    // 获取随机颜色的方法
    getColorList() {
        this.data.isLoading = true
        wx.showLoading({ title: '数据加载中...' }) // 显示loading
        // 显示toast
        // wx.showToast({
        //     title:'数据加载中...',
        //     icon:'loading',
        //     duration:2000
        // }) 
        wx.request({
            url: 'https://www.escook.cn/api/color',
            method: 'GET',
            // success:(res:any)=>{
            // 解构出属性data，并重命名为res
            success: ({ data: res }: any) => {
                this.setData({
                    // colorList:res.data
                    colorList: [...this.data.colorList, ...res.data] as []
                })
            },
            complete: () => {
                wx.hideLoading() // 关闭loading
                // wx.hideToast() // 关闭toast
                this.data.isLoading = false
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.getColorList()
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
        console.log(999);
        // 如果节流阀的值为 true，则阻止当前请求
        // 如果节流阀的值为 false，则发起数据请求
        // 写法一：
        // if (!this.data.isLoading) {
        //     // 调用获取随机颜色的方法
        //     this.getColorList()
        // }
        // 写法二
        // if(!this.data.isLoading) this.getColorList()
        // 写法三：
        if(this.data.isLoading) return
        this.getColorList()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})