// async function hello() {

// }

// const sing = async () => {
//     // throw "OH NO, PROBLEM!"
//     return "LA LA LA LA"
// }

// sing()
//     .then((data) => {
//         console.log(`Promise resolved with ${data}`)
//     })
//     .catch(err => {
//         console.log(err)
//     })

const login = async (username, password) => {
    if(!username || !password) throw "Missing Credentials"
    if(password === "corgifeetarecute") return "Welcome!"

    throw "Invalid password!!!"
}

// login("dlfijas;d", "corgifeetarecute")
// .then(msg => {
//     console.log("Logged in")
//     console.log(msg)
// })
// .catch(err => {
//     console.log(err)
// })

                //await + async


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

// delayedColorChange("red", 1000)
// .then(() => delayedColorChange("orange", 1000))
// .then(() => delayedColorChange("yellow", 1000))
// .then(() => delayedColorChange("green", 1000))
// .then(() => delayedColorChange("blue", 1000))
// .then(() => delayedColorChange("indigo", 1000))
// .then(() => delayedColorChange("violet", 1000))

async function rainbow() {
    await delayedColorChange("red", 1000)
    console.log("Resolved!")
    await delayedColorChange("orange", 1000) //it will instantly turn to orange
    //now, it will wait for the first promise to be resolved, which will be resolved after 1 second
    await delayedColorChange("yellow", 1000)
    await delayedColorChange("green", 1000)
    await delayedColorChange("blue", 1000)
    await delayedColorChange("indigo", 1000)
    await delayedColorChange("violet", 1000)
    // throw "AHH ERROR"
    return "All done!"
}

// rainbow().then(() => console.log("END OF RAINBOW!"))

async function printRainbow() {
    await rainbow()
    console.log("End of rainbow")
}




const fakeRequest = url => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500
        setTimeout(() => {
            if(delay > 4000) {
                reject("Connection Timeout :(")
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    let data1 = await fakeRequest("page2")
    console.log(data1)
}