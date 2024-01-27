import './spark-md5.js';
/**
 * 创建分片
 * @param {*} file 分片文件
 * @param {*} index 下标
 * @param {*} fileSize 分片大小
 */
export const createChunk = (file, index, fileSize) => {
    return new Promise(resolve => {
        const start = index * fileSize;
        const end = Math.min(file.size, start + fileSize);
        const spark = new SparkMD5.ArrayBuffer();
        // 文件读取器
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            spark.append(e.target.result)//主线程运算 卡顿原因
            // 整合
            resolve({
                start,
                end,
                index,
                hash: spark.end()
            })
        }
        // 切割 读取
        fileReader.readAsArrayBuffer(file.slice(start, end))
    })
}
