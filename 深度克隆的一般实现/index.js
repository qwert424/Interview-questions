// 深度可能一般有3种方法 ：
// 1、正统做法，递归
// 2、json方法 代码简单 但是缺陷使用范围局限 函数会被忽略
// 3、通信 通过浏览器克隆 缺点：局限于浏览器环境
// 4、lodash 简单方便

// 浅克隆：只复制基本类型的数据，引用类型的数据只复制了引用的地址，引用的对象并没有复制，在新的对象中修改引用类型的数据会影响原对象中的引用。
// 深克隆：是在引用类型的类中也实现了clone，是clone的嵌套，复制后的对象与原对象之间完全不会影响。
// 使用序列化也能完成深复制的功能：对象序列化后写入流中，此时也就不存在引用什么的概念了，再从流中读取，生成新的对象，新对象和原对象之间也是完全互不影响的。
// 使用clone实现的深克隆其实是浅克隆中嵌套了浅克隆，与toString方法类似

// 1、正统做法
// 缓存 解决无线递归
const map = new WeakMap();

function deepClone(obj) {
    // 判断是不是基本类型
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    // 缓存
    if (map.has(obj)) {
        return map.get(obj)
    }
    // 判断类型 可以继而判断是不是map、set
    let newObj = Array.isArray(obj) ? [] : {};
    // 针对原型链
    Object.setPrototypeOf(newObj, Object.getPrototypeOf(obj));
    map.set(obj, obj);
    for (let key in obj) {
        // 自有属性
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }
    }
    return newObj;
}

class Test {
    constructor() {
        this.x = 2
    }
    c() {
        console.log(1)
    }
}
const obj = new Test()
obj.z = obj // 递归引用报错
const obj2 = deepClone(obj)
console.log(obj2)

// 2、json方法
// function deepClone(obj) {
//     return JSON.parse(JSON.stringify(obj))
// }
// const obj = {
//     a: 1,
//     d() {
//         console.log(1)
//     },
//     c: {
//         b: 2
//     },
//     m: new Map(),

// }
// obj.z = obj // 递归引用报错
// const obj2 = deepClone(obj)
// console.log(obj2)

// 3、通信