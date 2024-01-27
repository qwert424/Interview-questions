// 去进行文件切片
import { createChunk } from './createChunk.js';

onmessage = async function (e) {
    const { file, start, end, File_Chunk_Size } = e.data;
    const result = []
    for (let i = start; i < end; i++) {
        result.push(createChunk(file, i, File_Chunk_Size))
    }
    const chunks = await Promise.all(result);
    postMessage(chunks);
}