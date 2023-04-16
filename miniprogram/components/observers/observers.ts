// components/observers/observers.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },
    options: {
        // 指定所有_开头的数据字段为纯数据字段
        pureDataPattern: /^_/
    },
    /**
     * 组件的初始数据
     */
    data: {
        // 纯数据字段：_rgb 的颜色值对象
        _rgb: {
            r: 0,
            g: 0,
            b: 0
        },
        fullColor: '0, 0, 0' // 普通数据字段：根据 _rgb 对象的3个属性，动态计算 fullColor 的值
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 生成随机 RGB 颜色的方法，非事件处理函数建议_开头
        _randomColor(): void {
            this.setData({
                _rgb: {
                    r: Math.floor(Math.random() * 256),
                    g: Math.floor(Math.random() * 256),
                    b: Math.floor(Math.random() * 256)
                }
            })
        },
        // 修改 _rgb 对象上 r 属性的值
        changeR(): void {
            this.setData({
                '_rgb.r': this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5
            })
        },
        // 修改 _rgb 对象上 g 属性的值
        changeG(): void {
            this.setData({
                '_rgb.g': this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
            })
        },
        // 修改 _rgb 对象上 b 属性的值
        changeB(): void {
            this.setData({
                '_rgb.b': this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
            })
        },
    },
    /**
     * 组件的数据监听器
     */
    observers: {
        // 监听 rgb 对象上 r, g, b 三个属性的变化
        '_rgb.r, _rgb.g, _rgb.b': function (r, g, b) {
            // 给 data 中的 fullColor 重新赋值
            this.setData({
                fullColor: `${r}, ${g}, ${b}`
            })
        }
    },

    /**
     * 组件的生命周期函数
     */
    // 推荐，优先级更高
    lifetimes: {
        attached() { },
        detached() { }
    },
    // 旧式的定义生命周期的方法，兼容小程序基础库版本 < 2.2.3
    attached() { },
    detached() { },
    
    /**
     * 组件所在页面的生命周期
     */
    pageLifetimes:{
        show(){
            this._randomColor()
        }
    }
})
