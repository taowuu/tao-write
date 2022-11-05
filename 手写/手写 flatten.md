# flatten 的实现
- `concat()` 不会更改现有数组

```js
const flatten = (arr) => {
    let res = []

    arr.forEach(item => {
        if(Array.isArray(item)) {
            // 是数组扁平化在连接
            const temp = flatten(item)
            res = res.concat(temp)
        } else {
            // 不是数组直接连接
            res = res.concat(item)
        }
    })
    // 把每层递归结果交给父问题
    // 返回最终结果
    return res
}

const arr = [0, 1, 2, [[3, 4]]]

console.log(flatten(arr)) // [0, 1, 2, 3, 4]
```
