数组分组和通用代码怎么思考？

通用代码的书写 要考虑传入的参数是多样的 我们就需要对参数进行归一话处理

数组分组：例如 我们需要将数组按照某个条件的值进行分组

```
const arr=[
    {name:'test1','age':30,'sex':'male'},
    {name:'test2','age':32,'sex':'female'},
    {name:'test3','age':33,'sex':'male'}]

=>>
result={
    male:[{name:'test1','age':30,'sex':'male'}],
    female:[{name:'test2','age':32,'sex':'female'}]
}
```

封装一个函数
```
function groupBy(target,groupByKey){
    const resule={}
    if(typeof groupByKey==="string"){
        groupByKey=(item)=>item[groupByKey]
    }
    for(const item of target){
        const key=groupByKey(item);
        if(!resule[key]){
            resule[key]=[];
        }
        resule[key].push(item);
    }
}
```


