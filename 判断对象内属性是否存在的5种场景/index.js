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


console.log("1、直接判断法 判断是不是等于 undefined")
if (obj.a === undefined) {
    console.log("不存在")
} else {
    console.log("存在")
}

console.log("2、Object.keys() 判断自有属性且可枚举的属性")
if (!Object.keys(obj).includes('a')) {
    console.log("不存在")
} else {
    console.log("存在")
}


console.log("3、hasOwnProperty() 判断自有属性的")
if (!obj.hasOwnProperty("a")) {
    console.log("不存在")
} else {
    console.log("存在")
}

console.log("4、in 判断自有属性和原型链上的属性 适应范围广 es6")
if (!('a' in obj)) {
    console.log("不存在")
} else {
    console.log("存在")
}

console.log("5、getOwnPropertySymbols判断是否为symbol类型")
if (Object.getOwnPropertySymbols(obj).includes([a])) {
    console.log("不存在")
} else {
    console.log("存在")
}