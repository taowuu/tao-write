// 手写 instanceof
// 顺着原型链往上匹配

const myInstanceof = (instance, origin) => {
    if (instance == null) return false 

    const type = typeof instance
    if (type !== 'object' && type !== 'function') {
        // 值类型
        return false
    }
    // 为了防止修改 instance
    let tempInstance = instance 
    while (tempInstance) {
        if (tempInstance.__proto__ === origin.prototype) {
            return true // 配上了
        }
        // 未匹配
        // 顺着原型链往上找
        tempInstance = tempInstance.__proto__ 
    }

    return false
}

console.log(myInstanceof({}, Object))
console.log(myInstanceof([], Object))
console.log(myInstanceof([], Array))
console.log(myInstanceof({}, Array))
console.log(myInstanceof('abc', String))
console.log(myInstanceof('abc', Object))
