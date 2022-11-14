// 手写 LazyMan
// 初始化任务队列
// next 函数每次取出队头
// eat 函数放入队列同步执行
// sleep 函数放入队列异步执行
// 最终都是以一个个执行

class LazyMan {
    constructor(name) {
        this.name = name
        this.tasks = []
        // 等待函数初始化再执行
        setTimeout(() => {
            this.next()
        })
    }

    next() {
        // 取出队头元素一个个执行
        const task = this.tasks.shift()
        if(task) task()
    }

    eat(food) {
        // 同步任务立即执行下一个任务
        const task = () => {
            console.log(`${this.name} eat ${food}`)
            this.next()
        }
        this.tasks.push(task)
        return this
    }

    sleep(second) {
        // 异步任务暂时等待
        const task = () => {
            setTimeout(() => {
                console.log(`${this.name} sleep ${second} s`)
                this.next()
            }, second * 1000)
        }
        this.tasks.push(task)
        return this
    }
}

const tao = new LazyMan('tao')
tao.eat('苹果').eat('香蕉').sleep(2).eat('葡萄')
