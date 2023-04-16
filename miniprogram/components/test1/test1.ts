// components/test1/test1.ts
Component({
    // 方法一：在组件的.js或.ts文件中新增如下配置
    options: {
        styleIsolation: 'shared'
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 定义属性的完整版写法
        max: {
            type: Number, // 属性值的数据类型
            value: 10 // 属性默认值
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        count: 0,
        n1: 0,
        n2: 0,
        sum: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        addN1(): void {
            this.setData({
                n1: this.data.n1 + 1
            })
        },
        addN2(): void {
            this.setData({
                n2: this.data.n2 + 1
            })
        },
        addCount(): void {
            this.setData({
                count: this.data.count + 1,
                max: this.properties.max + 1
            })
            this._showCount()
        },
        _showCount(): void {
            wx.showToast({
                title: `count值为：${this.data.count}`,
                icon: 'none'
            })
        }
    },

    /**
     * 组件的数据监听器
     */
    observers: {
        'n1,n2': function (n1, n2) {
            console.log(n1, n2)
            this.setData({
                sum: n1 + n2
            })
        }
    }
})
