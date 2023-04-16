// components/CommFather/CommFather.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        count: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        addCountFun(e: any): void {
            console.log(888)
            console.log(e, typeof e)
            this.setData({
                count: e.detail.value
            })
        },
        testFun(): void {
            console.log(666)
        },
        // 按钮的tap事件处理函数
        getChild(): void {
            const child = this.selectComponent('.son-component')
            // 调用子组件的 setData 方法
            child.setData({
                count: child.properties.count + 1
            })
            // 调用子组件的 addCount 方法
            child.addCount()
        }
    }
})
