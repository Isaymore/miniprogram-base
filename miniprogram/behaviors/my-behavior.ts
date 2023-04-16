// 1.调用 Behavior() 构造器方法，创建 Behavior 实例对象
// export const myBehavior = Behavior({
const myBehavior = Behavior({
    // 属性字段
    properties: {
        count: {
            type: Number,
            default: 0
        }
    },
    // 数据字段，私有数据
    data: {
        username: '星爷'
    },
    // 事件处理函数和自定义方法
    methods: {
        addCount(): void {
            this.setData({
                count: this.properties.count + 1
            })
        }
    }
})
// 2.用 module.exports 将 Behavior 实例对象共享/暴露出去
module.exports = myBehavior