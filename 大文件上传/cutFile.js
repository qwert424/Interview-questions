// 去进行文件切片
import { createChunk } from './createChunk.js'

// 分片大小
const File_Chunk_Size = 1024 * 1024 * 5; //5mb

// 线程数量
const workerCount = navigator.hardwareConcurrency || 4;

// 分片结束数量
let finishWorkerNum = 0;

// 结果
const result = [];

// 分片主操作
export const cutFile = (file) => {
    return new Promise(async (resolve) => {

        // 计算分片数量
        const chunkCount = Math.ceil(file.size / File_Chunk_Size);

        // 创建新线程
        if (chunkCount <= workerCount) {
            // 循环分片 耗时 因为在主线程进行分片 会卡顿
            for (let i = 0; i < chunkCount; i++) {
                // 文件\下标\大小
                const chunk = await createChunk(file, i, File_Chunk_Size)
                result.push(chunk);
            }
        } else {
            const workerChunkCount = Math.ceil(chunkCount / workerCount);

            for (let i = 0; i < workerCount; i++) {
                const worker = new Worker('./cutFileWorker.js', {
                    type: 'module',
                });
                // 发送消息
                const start = i * workerChunkCount;
                const end = Math.min(chunkCount, start + workerChunkCount)
                worker.postMessage({
                    file: file,
                    start,
                    end,
                    File_Chunk_Size
                })
                // 接受消息
                worker.onmessage = (e) => {
                    for (let i = start; i < end; i++) {
                        result[i] = e.data[i - start]
                    }
                    finishWorkerNum++;
                    // 分片线程完成
                    if (finishWorkerNum === workerCount) {
                        resolve(result)
                    }
                }
            }
        }
    }
    )
}