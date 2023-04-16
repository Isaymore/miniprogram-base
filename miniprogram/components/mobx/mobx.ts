// components/mobx/mobx.ts
import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "../../store/store";

Component({
    // 通过storeBindingsBehavior来实现自动绑定
    behaviors: [storeBindingsBehavior],
    storeBindings: {
        store, // 指定组件要绑定的store
        // 指定要绑定的字段数据
        fields: {
            numA: () => store.numA, // 绑定字段的第一种方式
            numB: (store) => store.numB, // 绑定字段的第二种方式
            sum: 'sum' // 绑定字段的第三种方式
        },
        // 指定要绑定的方法
        actions: {
            updateNum1: 'updateNum1',
            updateNum2: 'updateNum2'
        }
    },
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
        btnHandler1(e: WechatMiniprogram.BaseEvent): void {
            this.updateNum1(e.target.dataset.step)
        },
        btnHandler2(e: WechatMiniprogram.BaseEvent): void {
            this.updateNum2(e.target.dataset.step)
        }
    }
})
