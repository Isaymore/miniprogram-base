// components/behavior/behavior.ts
// 1.在组件中，使用 require() 方法导入需要的自定义 behavior 模块
const myBehavior = require('../../behaviors/my-behavior')
// import {myBehavior} from '../../behaviors/my-behavior'
Component({
    // 2.将导入的 Behavior 实例对象，挂载到 behaviors 数组节点中，即可访问 Behavior实例对象 中的数据或方法
    behaviors: [myBehavior],
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
