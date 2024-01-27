vite 手动分包知识

vite
开发环境 esbuild
打包 rollup

目的：
1、情景一：我们想要将项目中稳定部分单独分包 不稳定部分单独分包 这样修改不稳定部分 不影响稳定分包 分包指纹没有变化 用户仍然使用缓存 提高传输效率
2、我们想要对第三方库进行统一打包

```
情景一：
vite.config.js:
export default defineConfig(){
    ...
    build:{
        rollupOptions:{
            vue:['vue'],
            lodasj:['lodash']
        }
    }
}
```

```
情景二：
vite.config.js:
export default defineConfig(){
    ...
    build:{
        rollupOptions:{
           manualChunks(id){
                //console.log(id)
                if(id.includes('node_modules')){
                    return 'vendor'
                }
            }
        }
    }
}
```
