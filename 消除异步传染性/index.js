// 代码的目的是为了同步执行请求 消除Promise的传染性 （Promise的同步调用消除异步的传染性）

// 思路：
// 抛出错误重新请求
// fetch缓存结果 再次请求
// 不侵入原先代码 对fetch进行封装

// 思考下能否同步的运行promsie获取结果，消除掉async/await呢？
// 答案: 因为 js 是单线程，如果想要获取异步代码并且执行效果还得是同步的话可以利用报错 + 缓存 
function getUser() {
    return fetch('https://reqres.in')
}

function m1() {
    return getUser()
}


function m2() {
    return m1()
}

function main() {
    const resp = m2()
    console.log(resp)
}

function runMain() {
    // 缓存数据
    const cache = [];
    let index = 0;
    const oldFetch = window.fetch;
    window.fetch = (...args) => {
        // 缓存有结果
        if (cache[index]) {
            if (cache[index].status === 'fulfilled') {
                return cache[index].data
            } else if (cache[index].status === 'rejected') {
                return cache[index].err
            }
        }
        // 缓存无结果
        cache[index] = {
            status: 'pending',
            data: null,
            err: null
        }
        const prom = oldFetch(...args).then((resp => {
            cache[index] = {
                status: 'fulfilled',
                data: resp.url
            }
        }), err => {
            cache[index] = {
                status: 'rejected',
                err
            }
        })
        index++;
        throw prom
    }


    try {
        main()
    } catch (error) {
        if (error instanceof Promise) {
            const runagain = () => {
                main();
                index = 0;
            }
            error.then(runagain, runagain)
        }
    }
}

runMain()