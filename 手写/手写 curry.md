# curry 的实现
- 接受函数返回函数
- 执行到中间状态返回函数
- 执行到最后返回结果

```js
const curry = (fn) => {
    const fnArgs = fn.length
    // 记录参数
    let args = []
    // 返回函数
    const calc = (...newAgrs) => {
        // 合并参数
        args = [
            ...args,
            ...newAgrs
        ]
        // 参数不够返回函数
        if(args.length < fnArgs) {
            return calc
        } else {
            // 参数够了返回结果
            return fn(...args.slice(0, fnArgs))
        }
    }

    return calc
}

const add = (a, b, c) => {
    return a + b + c
}
add(10, 20, 30) // 60

const curryAdd = curry(add)
const res = curryAdd(10)(20)(30)
console.log(add(10, 20, 30)) // 60
console.log(res) // 60
```