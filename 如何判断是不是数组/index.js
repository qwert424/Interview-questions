// 判断数组的方法 至少有3种

// 1、Object.prototype.toString.call(arr).slice(8, -1) === 'Array';
// 这个方法之前还是可以的 但是现在可以通过toStringTag来更改 使他的值变得不准确了
// function isArray(arr){
//     return Object.prototype.toString.call(arr) === '[object Array]'
// }
// const obj={
//     [Symbol.toStringTag]:'Array'
// }
// console.log(isArray(obj));//true

// 2、使用instanceof判断 判断原型链
// 这个方法可以解决toStringTag被更改的问题 但是也有自己的问题
// 比如通过setPrototypeOf方法更改原型链
// function isArray(arr) {
//     return arr instanceof Array;
// }
// const obj = {
//     // __proto__:[]
// }
// Object.setPrototypeOf(obj, Array.prototype);
// console.log(isArray(obj));//true

// 而且在iframe下也会生出独立的doc、window
// 此时的数组也不会相等

// 3、使用Array.isArray()方法 判断是不是经过构造函数创建
// 这个方法最简单 但是是最有效的
// console.log(Array.isArray({}));