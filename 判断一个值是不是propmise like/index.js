// 考察propmise A+规范的知识
// propmise A+规范：是一个对象或者函数 且有then方法
function isPromise(executor) {
    return executor !== null && typeof executor.then === 'function' && (typeof executor === 'object' || typeof executor === 'function')
}