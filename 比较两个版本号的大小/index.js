// 语义版本号 比较大小 
// 可以通过split切割 正则表达式等等 但是需要遍历整个字符串 有没有不用遍历整个字符串的方法？
// 需要用到迭代器的知识

// const version1 = "x.y.z[-p]"; // 假设这是你的版本号字符串模板

// 12.3.1
// 5.7.8
// 1.5.6-alpha.1
// 7.2.3-beta

// 写一个迭代器
function* versionIterator(version) {
    let path = "";
    const arr = ['.', '-'];//中止迭代符号
    for (let i = 0; i < version.length; i++) {
        if (arr.includes(version[i])) {
            yield path;
            path = "";
        } else {
            path += version[i]
        }
    }
    yield path; // 最后一个是迭代器
}

// console.log(versionIterator('12.3.1').next())
for (const item of versionIterator('12.3.1')) {
    console.log(item)
}