for(var i = 0; i < 5; i++){
    console.log(i);
}
// 计算最长递增子序列的长度
// 思路：
// 1、每次取出一个数字
// 2、找到每个数字对应最佳位置 

// 最佳位置判断
// 1、如果这个数字大于所有之前的数字，则它是最长的序列的下一个数字
// 2、如果这个数字小于之前最后一个数字，则寻找它最佳位置 即找到第一个大于这个数的位置 替代他

// 这样得到的序列是最长的递增子序列 但不是表示这就是子序列的每个值 只能计算·长度 

// 实现：
function getLongest(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (result.length === 0 || result[result.length - 1] < current) {
            result.push(current);
        } else {
            let index = binarySearch(result, current);
            result[index] = current;
        }
    }
    return result.length;
}

// 2、如果这个数字小于之前最后一个数字，则寻找它最佳位置 即找到第一个大于这个数的位置 替代他
// 二分法
function binarySearch(result, current) {
    let low = 0;
    let high = result.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (result[mid] < current) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

const arr = [7, 14, 18, 12, 2, 5, 9, 3, 6, 1, 11, 4, 13, 15, 10, 16, 8]
console.log(getLongest(arr))