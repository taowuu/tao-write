// 手写 apply
// 会立刻执行函数
// 绑定 this
// apply 参数以数组形式

Function.prototype.myApply = function(context, args) {
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
f1.myApply(tao2, [4, 5, 6])
// this:  {name: 'tao2'}
// 4 5 6
