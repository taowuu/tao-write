# Generator 的实现

## 数组遍历的 7 种方法
1. forEach - 普通的数组遍历方法对 for 的优化
2. map - 每次遍历返回一个数组元素最终返回新数组
3. filter - 每次遍历返回布尔值来决定当前元素是否纳入新数组
4. reduce - 每次遍历将元素收归到容器中
5. reduceRight - reduce 反向操作
6. every - 判定是否所有元素都符合一个条件
7. some - 判定是有否一个或多个元素都符合一个条件

## 什么是遍历和迭代
- 遍历 - 一次性对数组的每个元素查询处理
- 迭代 - 手动控制遍历过程

## 什么是生成器和迭代器
- 生成器 - 函数
- 迭代器 - 生成器函数执行后返回的具有 next 方法的对象
- 生成器通过 yield 对迭代器进行控制

## 生成器示例
```js
const arr = [1, 2, 3, 4, 5]

function * generate(arr) {
    for(let i = 0; i < arr.length; i++) {
        yield arr[i]
    }

    return 'well done!!!'
}

const iterator = generate(arr)

console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 2, done: false }
console.log(iterator.next()) // { value: 3, done: false }
console.log(iterator.next()) // { value: 4, done: false }
console.log(iterator.next()) // { value: 5, done: false }
console.log(iterator.next()) // { value: "well done!!!", done: true }
```

## 生成器的实现原理
- 返回一个具备 next 方法的迭代器
- 迭代未结束前 done 为 fasle

```js
const myGenerate = (arr) => {
    let nextIndex = 0

    return {
        next: function() {
            return nextIndex < arr.length ?
            { value: arr[nextIndex ++], done: false } : 
            { value: arr[nextIndex ++], done: true }
        }
    }
}
```