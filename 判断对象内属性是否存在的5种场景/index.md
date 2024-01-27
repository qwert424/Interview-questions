如何判断一个对象中是否有这个属性 
方法有很多 但是要分门别类 我们要知道 什么场景 什么需求 

如这个属性是对象的自有属性 还是 原型链上的属性 这个属性是不是可枚举的 

下面给出几种判断方法：
```
const obj={
    a:undefined,
}

// const obj = {}
// Object.defineProperty(obj, 'a', {
//     value: 1,
//     enumerable: false
// })

// const obj = {}
// obj.__proto__.a = 1

// const a = Symbol();
// const obj = {
//     [a]: 1
// }
```

```
1、直接判断法 判断是不是等于 undefined
console.log("1、直接判断法 判断是不是等于 undefined")
if (obj.a === undefined) {
    console.log("不存在")
} else {
    console.log("存在")
}
```
```
2、Object.keys() 判断自有属性且可枚举的属性
console.log("2、Object.keys() 判断自有属性且可枚举的属性")
if (!Object.keys(obj).includes('a')) {
    console.log("不存在")
} else {
    console.log("存在")
}
```
```
3、hasOwnProperty() 判断自有属性的 
console.log("3、hasOwnProperty() 判断自有属性的")
if (!obj.hasOwnProperty("a")) {
    console.log("不存在")
} else {
    console.log("存在")
}
```
```
4、in 判断自有属性和原型链上的属性 适应范围广 es6
console.log("4、in 判断自有属性和原型链上的属性 适应范围广 es6")
if (!('a' in obj)) {
    console.log("不存在")
} else {
    console.log("存在")
}
```
```
5、getOwnPropertySymbols判断是否为symbol类型
console.log("5、getOwnPropertySymbols判断是否为symbol类型")
if (Object.getOwnPropertySymbols(obj).includes([a])) {
    console.log("不存在")
} else {
    console.log("存在")
}
```