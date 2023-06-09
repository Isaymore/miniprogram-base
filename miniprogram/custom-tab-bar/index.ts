// custom-tab-bar/index.ts
import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "../store/store";
Component({
    options: {
        styleIsolation: 'shared'
    },
    behaviors: [storeBindingsBehavior],
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        list: [
            {
                "pagePath": "/pages/home/home",
                "text": "首页",
                "iconPath": "/images/tabs/home.png",
                "selectedIconPath": "/images/tabs/home-active.png"
            },
            {
                "pagePath": "/pages/msg/msg",
                "text": "消息",
                "iconPath": "/images/tabs/message.png",
                "selectedIconPath": "/images/tabs/message-active.png",
                "info": 0
            },
            {
                "pagePath": "/pages/contact/contact",
                "text": "联系",
                "iconPath": "/images/tabs/contact.png",
                "selectedIconPath": "/images/tabs/contact-active.png"
            }
        ]
    },
    storeBindings: {
        store,
        fields: {
            sum: 'sum',
            active: 'activeTabBarIndex'
        },
        actions: {
            updateActive: 'updateActiveTabBarIndex'
        }
    },
    observers: {
        'sum': function (sum) {
            this.setData({
                'list[1].info': sum
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event: any) {
            // event.detail 的值为当前选中项的索引
            console.log('event.detail', event.detail, typeof event.detail)
            // this.setData({ active: event.detail });
            this.updateActive(event.detail)
            wx.switchTab({
                url: this.data.list[event.detail].pagePath
            })
        },
    }
})
