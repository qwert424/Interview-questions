const start = 2 ** 53
const end = start + 100
for(let i=start; i<end; i++){
    console.log('loop')
}
console.log(start === end, start, end)