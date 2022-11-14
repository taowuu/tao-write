// 手写 isNaN
// - `NaN` 特点
//     - `typeof` 是数字
//     - 我不等于我自己
//     - 不能被删除
// - 作用
//     - 检查 `toNumber` 返回值
//     - 是 `NaN` 返回 `true`
//     - 不能判断 `big int`
// - 陷阱
//     - `indexOf` 不能识别数组中的 `NaN`
//     - `includes` 可以识别数组中的 `NaN`

function isNaNVal(val) {
    return Object.is(val, NaN)
}

function isNaNVal(val) {
    return val !== val
}

function isNaNVal(val) {
    return typeof val === 'number' && isNaN(val)
}
