# getType 的实现
- typeof 只能判断值类型
- instanceof 只能判断类型
- 使用 toString

```js
const getType = (x) => {
    const originType = Object.prototype.toString.call(x) // '[object String]'
    const spaceIndex = originType.indexOf(' ')
    const type = originType.slice(spaceIndex + 1, -1) // 'String'
    return type.toLowerCase() // 'string'
}
```