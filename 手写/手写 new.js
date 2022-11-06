// 手写 new

const _new = function(constructor, ...args) {
    // 1. 创建一个空对象，继承 constructor 的原型
    const obj = Object.create(constructor.prototype)
    // 2. 将 obj 作为 this ，执行 constructor ，传入参数
    constructor.apply(obj, args)
    // 3. 返回 obj
    return obj
}

// 过程模拟
var stu = new Student('tao')

function Student(name) {
    // 创建临时对象保存 stu 的属性
    var temp = {}
    // 改变 this 指向
    this = temp
    // 改变原型
    this.__proto__ = Student.prototype
    this.name = name
    // 然后返回 这个 this
    return this
}
