vue 仓库持久化

vue 仓库有 vuex 和 pinia

仓库在刷新页面的时候会初始化 我们想要仓库持久化 这么做呢？

思路 就是写一个仓库插件 在 window 的页面卸载的时候 进行保存到本地仓库 在仓库初始化的时候替换仓库数据 完成持久化

恢复的时候注意 小心本地仓库数据被篡改导致反序列化失败 所以trycatch包裹代码

```
vuex实现方式：
const store=createStore({

    plugins: {my-plugin}
})//创建仓库实例 这里省略其他配置项 只写核心代码

my-plugin:
const KEY = 'vuex-store';
export default function ( store ) {
    //保存仓库数据
    window.addEventListener('beforeunload',()=>{
        window.localStorage.setItem(KEY,JSON.stringify(store.state))
    })
    //恢复仓库数据 
    try(){
        const localData = window.localStorage.getItem(KEY)
        if(localData){
           store.replaceState(JSON.parse(localData))
        }
    }catch(){
        console.log('仓库数据恢复失败')
    }
}
```



```
pinia实现方式：
const pinia=createPinia();
pinia.use(my-plugin)//他会针对每一个仓库进行处理

my-plugin:
const KEY = 'pinia-store';
export default function ( context ) {
    const {store}=context;
    const NewKey=`${KEY}-${store.id}`;
    //保存仓库数据
    window.addEventListener('beforeunload',()=>{
        window.localStorage.setItem(NewKey,JSON.stringify(store.$state))
    })
    //恢复仓库数据
    try(){
        const localData = window.localStorage.getItem(NewKey)
        if(localData){
           store.$patch(JSON.parse(localData))
        }
    }catch(){
        console.log('仓库数据恢复失败')
    }
}
```
