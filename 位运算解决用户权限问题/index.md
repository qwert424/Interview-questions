用户权限 的标准处理方法就是我们通过二进制的数字 通过位运算来进行用户读写删等操作

| 或运算 就是 只要有 1 就为 1
& 与运算 就是 只要有 0 就为 0
^ 异或运算 就是 相同为 0 不同为 1

例子：

```
const READ = 0b1;
const WRITE = 0b10;
const UPDATA = 0b100;
const DELETE = 0b1000;

// 多种权限组合
// const userPermission=READ | WRITE;

// console.log(userPermission); // 输出 3

// 后端权限数字 13
let userPermission = 13;

if (userPermission & READ) {
    console.log('用户有读权限');
}

if (userPermission & DELETE) {
    userPermission ^= DELETE; //有删除权限就取消删除权限
    console.log(userPermission)
}
```
