import { cutFile } from './cutFile.js';

const fileInput = document.querySelector('#myCliceFile');

// 切片相关
const toCutFile = async (e) => {
    const file = e.target.files[0]
    console.time('cutFile');
    const chunks = await cutFile(file)
    console.timeEnd('cutFile');
    console.log(chunks)
}

// 事件绑定
fileInput.addEventListener('change', toCutFile);

