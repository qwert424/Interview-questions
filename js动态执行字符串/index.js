// 问题:给你一个字符串 如何去执行它?
// 如:
let a = 0;
function test(str) {
    let a = 1;
    // 
}
// 给你一个字符串'console.log(a)' 如何去执行它?

test('console.log(a)');
console.log("上面字符串执行=>同步执行还是异步执行?");

// 1、使用eval来执行字符串 这个方法是同步的 且作用域局部
// let a = 0;
// function test(str) {
//     let a = 1;
//     eval(str);
// }
// // 给你一个字符串'console.log(a)' 如何去执行它?

// test('console.log(a)');
// console.log("上面字符串执行=>同步执行还是异步执行?");


// 2、通过setTimeout来执行字符串 这个方法是异步的 且作用域全局
// let a = 0;
// function test(str) {
//     let a = 1;
//     setTimeout(str,0)
// }
// // 给你一个字符串'console.log(a)' 如何去执行它?

// test('console.log(a)');
// console.log("上面字符串执行=>同步执行还是异步执行?");

// 3、通过new Function来执行字符串 这个方法是同步的 且作用域全局
// let a = 0;
// function test(str) {
//     let a = 1;
//     const fn = new Function(str)
//     fn()
// }
// // 给你一个字符串'console.log(a)' 如何去执行它?

// test('console.log(a)');
// console.log("上面字符串执行=>同步执行还是异步执行?");

// 4、通过创建script标签来执行字符串 这个方法是同步的 且作用域全局
// let a = 0;
// function test(str) {
//     let a = 1;
//     const script = document.createElement('script');
//     script.innerHTML = str;
//     document.body.appendChild(script);
// }
// // 给你一个字符串'console.log(a)' 如何去执行它?

// test('console.log(a)');
// console.log("上面字符串执行=>同步执行还是异步执行?");


// 通过函数和script的区别在于 函数不会创建多余的标签