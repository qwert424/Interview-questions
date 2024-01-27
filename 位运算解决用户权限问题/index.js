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