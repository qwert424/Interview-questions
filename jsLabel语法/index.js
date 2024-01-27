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