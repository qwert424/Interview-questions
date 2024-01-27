vite 图片处理

前景提示
vite 打包会对图片进行优化处理 即 大小小于 4096 的会转换成 base64 格式
所以会造成开发环境的图片路径和生产环境不一致
但是 vite 没有针对开发环境的处理 只有对生产环境处理

即

```
import bigImgUrl from './bigImgUrl.png'
import smlImgUrl from './smlImgUrl.png'

console.log(bigImgUrl, smlImgUrl)
```

开发环境 和 生产环境不一致

解决方法 1、放弃 vite 的图片优化

```
vite.config.js
export default defineConfig(){
    build:{
        assetsInlineLimit:4096
    }
}
```

解决方法二、自己写插件 去使得开发环境的图片路径和生产环境保持一致

```
vite.config.js
import fs from 'node:fs';

const my-plugin=(limit=4096)=>{
    return {
        name:'my-plugin',
        async transform(code,id){
            //环境判断
            if(process.env.NODE_ENV !== 'development'){
                return;
            }
            //文件判断 要求png改变
            if(!id.endsWith('.png')){
                return;
            }
            //文件大小判断 node环境读取文件用fs
            const stat=await fs.promises.stat(id);
            if(stat.size>limit){
                return
            }
            //转换成base64
            const buffer=await fs.promises.readFile(id);
            const base64=buffer.toString('base64');
            const dataUrl=`data:image/png;base64,${base64}`;
            return `export default "${dataUrl}"`;
        }
    }
}


export default defineConfig(){
    plugins:['my-plugin']
    build:{
        assetsInlineLimit:4096
    }
}
```
