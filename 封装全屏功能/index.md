封装全屏功能

封装的思路：考虑兼容性问题 把共同代码提出 每次执行不进行额外的查找

全屏功能

```
const funcNames=
/**
    找到target对象中包含的name
 */
function getPropertyName(names,target){
    return names.find(item=>item in target)
}

//进入全屏方法名
const enterFullScreen =getPropertyName([
    'requestFullScreen',
    'webkitRequestFullScreen',
    'mozRequestFullScreen',
    'msRequestFullScreen'],document.documentElement);
//进入全屏方法
export function enter(ele){
    return enterFullScreen && ele[enterFullScreen]();
}

//退出全屏的方法名
const exitFullScreen =getPropertyName([
    'exitFullscreen',
    'webkitExitFullscreen',
    'mozCancelFullScreen',
    'msExitFullscreen'
],document)
//退出全屏的方法
export function exit(){
    return exitFullScreen && document[exitFullScreen]();
}

//查找那个元素属于全屏
const fullElement=getPropertyName([
    'fullscreenElement',
    'webkitFullscreenElement',
    'mozFullScreenElement',
    'msFullscreenElement'
],document)
export function getFullEle(){
    return document[fullElement] || null
}

//判断是否全屏
export function isFull(){
    return !!getFullEle()
}

//切换全屏
export function toggle(ele){
    getFullEle() ? exit() : exit(ele)
}


```
