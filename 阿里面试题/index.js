var a = { n: 1 }
var b = a;
a.x = a = { n: 2 }
console.log(a.x)
console.log(b.x)

// 模糊点：点运算优先级高于赋值运算 赋值运算返回所赋的值
// a.x = a = { n: 2 } 这句话就被拆分成： 1、a.x 2、a = { n: 2 } 3、a.x = a = { n: 2 } 

// a.x就是在{n:1}空间内找到x等待赋值运算结果
// a = { n: 2 }就是开新空间 然后返回所赋的值
// a.x = a = { n: 2 } 就是x=返回所赋的值
// 所以 console.log(a.x) 在{n:2}找不到
