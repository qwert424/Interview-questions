// 问题：浏览器打印对象的bug
// 问题重现:
const obj = [{ a: 1 }, { a: 2 }]
console.log(obj)
obj[0].a++;
console.log(obj)
