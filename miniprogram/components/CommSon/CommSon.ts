Component({
    /**
     * 组件的属性列表
     */
    properties: {
        count:{
            type:Number,
            default: 0
        }
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
        addCount():void{
            this.setData({
                count: this.properties.count + 1
            })
            this.triggerEvent('addCountEV', {value: this.properties.count})
            // this.triggerEvent('addCountEV', this.properties.count)
        },
        emitFun():void {
            console.log(111)
            const that = this
            wx.nextTick(function (){
                that.triggerEvent('emitEV', 777)
            })
            console.log(222)
        }
    }
})
