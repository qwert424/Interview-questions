// 问题：
// const arr = [1, 2, 3]
const arr = [, , 3]
// arr.forEach((item, index) => {
//     // 问题1：为啥不死循环？
//     // arr.push(2)
//     // 问题2：输出什么？
//     // arr.splice(index, 1)
//     // 问题3：arr=[,,3]会输出啥？

//     console.log('arr', item)
// })
// console.log(arr)

// 想要解决上面的问题 就需要知道一下知识
// es规范怎么定义foreach的实现的？
// When the forEach method is called with one or two arguments, the following steps are taken:

// Let O be ? ToObject(this value).   this问题
// Let len be ? ToLength(? Get(O, "length")).  长度
// If IsCallable(callbackfn) is false, throw a TypeError exception.  回调函数
// If thisArg was supplied, let T be thisArg; else let T be undefined.
// Let k be 0.   下标
// Repeat, while k < len    while k < len 循环
// Let Pk be ! ToString(k).   转成字符串
// Let kPresent be ? HasProperty(O, Pk).  HasProperty(O, Pk)在这个里面
// If kPresent is true, then
// Let kValue be ? Get(O, Pk).
// Perform ? Call(callbackfn, T, « kValue, k, O »).
// Increase k by 1.
// Return undefined.



// 自己手写一个forEach
Array.prototype.myForEach = function (callbackfn) {
    // 2. 获取当前的数组的长度
    let len = this.length;
    // 3. 判断当前的回调函数是否是一个函数
    if (typeof callbackfn !== 'function') {
        throw new TypeError(callbackfn + 'is not a function');
    }
    // 下标
    let k = 0;
    while (k < len) {
        // HasProperty(O, Pk)
        if (k in this) {
            callbackfn(arr[k], k, arr);
        }
        k++;
    }
}

arr.myForEach((item, index) => {
    // 问题1：为啥不死循环？
    // arr.push(2)
    // 问题2：输出什么？
    // arr.splice(index, 1)
    // 问题3：arr=[,,3]会输出啥？
    console.log('arr', item)
})
console.log(arr)

// 总结 就是需要一个回调函数 且运行时候的长度（次数）是固定的 一开始就知道运行的次数！

