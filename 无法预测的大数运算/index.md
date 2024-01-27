无法预测的大数运算

题目：

```
const start = 2 ** 53
const end = start + 100
for(let i=start; i<end; i++){
    console.log('loop')
}

答 运行的次数？ 无法预测
console.log(start === end, start, end)
```

js 最大精度为 2\*\*53-1 这个数字也就是 number.MAX_SAFE_INTEGER 的值

尾数部分决定 精度

整数部分二进制一定为固定的 1

超过精度的值 可能会丢失精度

2\*\*53 === 2\*\*53+1 true
