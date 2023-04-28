const fakeRequest = url => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500
        setTimeout(() => {
            if(delay > 2500) {
                reject("Connection Timeout :(")
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// async function makeTwoRequests() {
//     let data1 = await fakeRequest("idk.com")
//     console.log("HELLO!") //if the promise is rejected, this won't run!!
// }

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest("/page1")
        console.log(data1)
        let data2 = await fakeRequest("/page2")
        console.log(data2)
    } catch (e){
        console.log("Caught an error!")
        console.log(`Error: ${e}`)
    }
    console.log("Reached here!") //This will now run!
}