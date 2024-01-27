问题本身： 在多重循环里面 子循环这么结束顶层循环？

解决方法很多
1、我们可以使得顶层循环条件不满足
2、函数 return
3、本次使用的标记语法 label


```
1、我们可以使得顶层循环条件不满足
for (var i = 0; i < 10; i++) {
    console.log('顶层循环', i)
    let ok = false;
    for (let j = 0; j < 10; j++) {
        console.log('2层循环', i, j)
        if (i * j > 30) {
            console.log('退出循环', i, j)
            ok = true
            break
        }
    }
    if (ok) {
        break; // 退出顶层循环
    }
}
缺点：麻烦

for (var i = 0; i < 10; i++) {
    console.log('顶层循环', i)
    for (let j = 0; j < 10; j++) {
        console.log('2层循环', i, j)
        if (i * j > 30) {
            console.log('退出循环', i, j)
            i = 11
            break
        }
    }

}
缺点：...？
```
```
2、函数 return
function test() {
    for (var i = 0; i < 10; i++) {
        console.log('顶层循环', i)
        for (let j = 0; j < 10; j++) {
            console.log('2层循环', i, j)
            if (i * j > 30) {
                console.log('退出循环', i, j)
                return
            }
        }
    }
}

test()

类似goto 是label标记语言
```


```
3、本次使用的标记语法 label
out: for (var i = 0; i < 10; i++) {
    console.log('顶层循环', i)
    for (let j = 0; j < 10; j++) {
        console.log('2层循环', i, j)
        if (i * j > 30) {
            console.log('退出循环', i, j)
            break out
        }
    }

}

类似goto 是label标记语言
```
