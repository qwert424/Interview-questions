在es6之前 js的语言只有值传递
值传递的本质就是都有一块独立的空间去存放值 值复制粘贴 即使是对象 也是复制粘贴地址的

但是在es6模块化后 在模块的导入导出就是用到了引用传递 如：
```
Amodule：
export const a=1;

b:
import {a} from './Amodule';
```
上面的a和A模块的a是同一块内存空间 即使你将
```
import {a as b} from './Amodule';
```
as重命名也是 也是同一内存空间

这也是符号绑定