const a = {
    count: 1,
    // [Symbol.toPrimitive]:function(v) {return 123},
    valueOf() {
        console.log("valueOf")
        return [];
    },
    toString() {
        return this.count++
    }
}
if (a == 1 && a == 2 && a == 3) {
    console.log("成功")
}