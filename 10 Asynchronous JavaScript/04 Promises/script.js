const fakeRequest = url => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random()
            if(rand < 0.7) {
                resolve("Request fullfilled")
            }
            reject("API error")
        }, 1000)
    })
}

// fakeRequest('deeznuts.com/page1')
//     .then( msg => {
//         console.log("Done with Request")
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log("Timeout error")
//         console.log(err)
//     })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

delayedColorChange("red", 1000)
    .then(() => delayedColorChange("orange", 1000))
    .then(() => delayedColorChange("yellow", 1000))
    .then(() => delayedColorChange("green", 1000))
    .then(() => delayedColorChange("blue", 1000))
    .then(() => delayedColorChange("indigo", 1000))
    .then(() => delayedColorChange("violet", 1000))
    .catch(() => {
        console.log("This isn't supposed to happen, how tf did you reach here bruh")
    })