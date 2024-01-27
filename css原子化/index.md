css 的方案有很多
1、css 原子化
如：tailwindcss、windi、uno
tailwindcss:https://www.tailwindcss.cn/
windicss:https://cn.windicss.org/
uno:https://unocss.dev/
2、css 模块化
3、BEM

Blocks，Element和Modifier

听到BEM是方法论的关键元素 - Block，Element和Modifier的缩写，您一定不会感到惊讶。BEM严格的命名规则可以在这里找到。

块
独立的实体，它本身是有意义的。
例子 header，container，menu，checkbox，input
元件
块的一部分，没有独立的含义，并且在语义上与其块相关联。
例子 menu item，list item，checkbox caption，header title
修改
块或元素上的标志。用它们来改变外观或行为。
例子 disabled，highlighted，checked，fixed，size big，color yellow


我们可以使用一个普通按钮应对普通情况 ，再使用两种不同的应对不同情况。因为我们使用BEM的方式为Block 绑定了class，我们可以用任何想使用的标签去实现。（button，a 甚至是div）。但是命名规则告诉我们需要使用 **block-modifier-value** 的语法。

4、css in js
