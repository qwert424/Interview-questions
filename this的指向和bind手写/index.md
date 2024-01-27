this 的指向

this 分为全局 this 和函数内 this

全局 this
浏览器：window
node：{}

函数内部的 this 是要看这么调用

和函数执行上下文环境相关

![Alt text](image.png)

且箭头函数没有 this

```
function test(){
    console.log(this)
}
const newTest=test.bind(1)
newTest()
```

上面要注意 虽然直接调用 newTest this 指向为全局 但是我们要知道 newTest 和 test 函数是不一样的

```
手写bind方法
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
```
