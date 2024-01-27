我们知道很多数组的操作都是会改变原数组的 除非我们自己封装一些方法 -->
es2023 出现了数组纯函数 格式：to...ed()
如：

```
const arr=[3,7,1]
<!-- 我们进行排序 -->
arr.sort()//[1,3,7]
console.log(arr)//[1,3,7]
<!-- 我们可以使用to...ed()方法来实现不改变原数组 -->
arr.toSorted()//[1,3,7]
console.log(arr)//[3,7,1]
```

很多操作都是可以的 :
toSpliced()
toReversed()

修改数组第一项 之前我们通过 arr[0]来修改
现在通过 with 来修改

```
const arr=[3,7,1]
<!-- 我们使用with来修改第一项 -->
arr.with(0,100)//[100,7,1]
console.log(arr)//[3,7,1]
```
