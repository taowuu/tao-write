// 手写 call
// 会立刻执行函数
// 绑定 this
// call 参数一个个传入

Function.prototype.myCall = function(context, ...args) {
    // 你的代码
    // 不会出现属性名称的覆盖
    const fnKey = Symbol()
    // this 就是当前的函数
    context[fnKey] = this
    // 绑定了 this
    const res = context[fnKey](...args) 
    delete context[fnKey] 

    return res
}

const tao1 = {
    name: 'tao1',
}
const tao2 = {
    name: 'tao2',
}

const f1 = function(a, b, c) {
    console.log('this: ', this)
    console.log(a, b, c)
}

f1(1, 2, 3) 
// this: window
// 1 2 3
f1.myCall(tao2, 4, 5, 6)
// this:  { name: 'tao2'}
// 4 5 6