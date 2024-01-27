vite 打包结构控制

目的：vite 打包 dist 文件有 index.html 和 assets 文件夹来存放其他的 css、js、图片文件
那么 我们有什么办法使得分类更加细腻呢？即 css 放 css js 放 js img 放图片

那么我们需要查看 vite 官网 发现没有 进而查看 rollur https://www.rollupjs.com/ 查看它的打包配置项

```
vite.congif.js
export default defineConfig(){
    build:{
        rollupOptions:{
            output:{
                chunkFileNames:'js/[name]-[hash].js',//分包js
                entryFileNames:'js/[name]-[hash].js',//js
                //assetFileNames:'[ext]/[name]-[hash].[ext]'//如果不想要svg单独一个分类 可以用函数返回字符串
                assetFileNames(assetsInfo){
                    if(assetsInfo.name.endWith('.css')){
                        return 'css/[name]-[hash].css'
                    }
                    //图片文件
                    if(['png', 'jpg', 'jpeg', 'gif','svg','webp'].some(item => item.name.endsWith(item))){
                        return 'img/[name]-[hash].[ext]'
                    }
                    return 'assets/[name]-[hash].[ext]'
                }
            }
        }
    }
}
```
