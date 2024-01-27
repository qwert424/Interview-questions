function test(...args) {
    console.log(this, ...args)
}

test.bind(1, 2, 3)() //官方bind
const newTest = test.bind(1) //官方bind
new newTest()//官方bind

// 官方bind的特点：
// 1、new构造返回构造函数
// 2、有返回值

// 那么我们首先要知道bind写在哪？
// 写在每个函数的原型上

Function.prototype.bind2 = function (ctx, ...args) {
    // 存储调用bind的this指向（运行函数）
    const fn = this;
    return function (...args2) {
        // 判断fn是通过什么调用的 直接还是new
        if (new.target) {
            return new test([...args, ...args2])
        } else {
            return fn.apply(ctx, [...args, ...args2]);
        }
    }
}


test.bind2(1, 2, 3)() //手写bind
const newTest1 = test.bind(1) //手写bind
new newTest1()//手写bind