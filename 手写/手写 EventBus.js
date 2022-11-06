// 手写 EventBus
// on 和 once 注册函数存储起来
// emit 找到对应函数触发
// off 找到并删除对于函数

class EventBus {
    constructor() {
        // 单次事件分开存储
        this.events = {}
        this.onceEvents = {}
    }

    on(type, fn) {
        const events = this.events
        // 事件类型初始化
        if (events[type] == null) events[type] = []
        // 以存在新增
        events[type].push(fn)
    }

    once(type, fn) {
        const onceEvents = this.onceEvents
        if (onceEvents[type] == null) onceEvents[type] = []
        onceEvents[type].push(fn)
    }

    off(type, fn) {
        if (!fn) {
            // 解绑所有事件
            this.events[type] = []
            this.onceEvents[type] = []
        } else {
            // 解绑单个事件
            const fnList = this.events[type]
            const onceFnList = this.onceEvents[type]
            if (fnList) {
                this.events[type] = fnList.filter(curFn => curFn !== fn)
            }
            if (onceFnList) {
                this.onceEvents[type] = onceFnList.filter(curFn => curFn !== fn)
            }
        }
    }

    emit(type, ...args) {
        const fnList = this.events[type]
        const onceFnList = this.onceEvents[type]

        if (fnList) {
            fnList.forEach(f => f(...args))
        }
        if (onceFnList) {
            onceFnList.forEach(f => f(...args))
            // once 执行一次就删除
            this.onceEvents[type] = []
        }
    }
}

const e = new EventBus()

function fn1(a, b) { console.log('fn1', a, b) }
function fn2(a, b) { console.log('fn2', a, b) }
function fn3(a, b) { console.log('fn3', a, b) }

e.on('key1', fn1)
e.on('key1', fn2)
e.once('key1', fn3)
e.on('xxxxxx', fn3)

e.emit('key1', 10, 20) // 触发 fn1 fn2 fn3

e.off('key1', fn1)

e.emit('key1', 100, 200) // 触发 fn2
