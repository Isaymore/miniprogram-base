// app.ts
// 1.在小程序入口文件中调用一次 promisifyAll()方法
import { promisifyAll } from 'miniprogram-api-promise'
// 2.声明一个常量，指向一个空对象
// const wxp = wx.p = {}
const wxp = (wx as any).p = {}
// 3.调用 promisifyAll()方法，promisify all wx's api
promisifyAll(wx, wxp)
App<IAppOption>({
    globalData: {},
    onLaunch() {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                console.log(res.code)
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            },
        })
    },
})