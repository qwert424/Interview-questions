关于动画事件 transformend 我们可以发现会触发多次

例如

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            margin: 100px auto;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: red;
            transition: all 0.5s;
        }

        .box:hover {
            transform: scale(2);
            border-radius: 0;
        }
    </style>
</head>

<body>
    <div class="box"></div>
    <script>
        const box = document.querySelector('.box');
        box.addEventListener('transitionend', () => {
            console.log(1)
        })
    </script>
</body>

</html>
```

我们会发现 transition 触发 5 次 为什么？
因为上述 transition 变换 border-radius 为 0 其实改变
border-top-left-radius: 0px;
border-top-right-radius: 0px;
border-bottom-right-radius: 0px;
border-bottom-left-radius: 0px;
这么多属性
每次变换结束都会触发一次动画事件结束

这么解决呢？可以防抖 可以事件监听添加{once:true} 根据情况具体选择

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            margin: 100px auto;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: red;
            transition: all 0.5s;
        }

        .box:hover {
            transform: scale(2);
            border-radius: 0;
        }
    </style>
</head>

<body>
    <div class="box"></div>
    <script>
        function debounce(fn, delay) {
            let timeId;
            return function (...args) {
                clearTimeout(timeId);
                timeId = setTimeout(() => {
                    fn.apply(this, args)
                }, delay)
            }
        }

        const box = document.querySelector('.box');
        box.addEventListener('transitionend', debounce(() => {
            console.log(1)
        }, 1000));
    </script>
</body>

</html>
```
