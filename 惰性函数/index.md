惰性函数

首先我们先看下面的代码

```
    function copyText(text){
        if(navigator.clipboard){
            navigator.clipboard.writeText(text)
        }else{
            const input=document.createElement('input');
            input.setAttribute('value','text');
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
        }
    }
```

我们可以思考上面代码优化的点在哪里？
答案：我们需要每次执行复制的时候去判断是否支持 navigator.clipboard 吗？ 因为我们第一次调用 我们就可以确定是否支持这个功能。
这个判断虽然很快 但是如果中途还添加了额外耗时判断 如：是不是 vip 用户 这个也是第一次调用我们就可以确定的！

所以 解决方案：
1、惰性函数

```
function copyText(text){
    if(navigator.clipboard){
        copyText=(text)=>navigator.clipboard.writeText(text)
    }else{
        copyText=(text)=>{
        const input=document.createElement('input');
        input.setAttribute('value','text');
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        }
    }
    copyText(text)
    }
```

就是在调用一次后 改写了当前函数 返回新的函数 这是副作用函数

2、高阶函数

```
const copyText=(function createCopyText(text){
        if(navigator.clipboard){
           return (text)=> navigator.clipboard.writeText(text)
        }else{
           return (text)=>{
                const input=document.createElement('input');
                input.setAttribute('value','text');
                document.body.appendChild(input);
                input.select();
                document.execCommand('copy');
                document.body.removeChild(input);
           }
        }
})()
```
高阶函数这是在函数执行前 就已经确定了函数的返回值 返回一个函数 这样就不用每次都判断了 直接返回一个函数
缺点是 增加了首屏幕渲染实践 白屏问题