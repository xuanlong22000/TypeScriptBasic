function resolveAfter2Seconds() {
    console.log("starting slow promise")
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow")
            console.log("slow promise is done")
        }, 2000)
    })
}

function resolveAfter1Second() {
    console.log("starting fast promise")
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast")
            console.log("fast promise is done")
        }, 1000)
    })
}

setTimeout(async () => {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds() // starts timer immediately
    const fast = resolveAfter1Second() // starts timer immediately

    // 1. Execution gets here almost instantly
    console.log(await slow) // 2. this runs 2 seconds after 1.
    console.log(await fast)
}, 4000);

