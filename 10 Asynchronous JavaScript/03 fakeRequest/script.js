const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000) {
            failure("Connection Timeout :(")
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

                        //CALLBACK HELL (so many callbacks!)

// fakeRequestCallback('books.com', 
//     msg => {
//         console.log('IT WORKED!!')
//         console.log(msg)
//         fakeRequestCallback('books.com/page2', 
//         response => {
//             console.log('IT WORKED AGAIN!')
//             console.log(response)
//             fakeRequestCallback('books.com/page3',
//             msg => {
//                 console.log('IT WORKED YET AGAIN')
//                 console.log(msg)
//             }, err => {
//                 console.log('IT FAILED (3rd)')
//                 console.log(err)
//             })
//         }, err => {
//             console.log('IT FAILED! (2nd attempt)')
//             console.log(err)
//         })
//     }, err => {
//         console.log('ERROR!!')
//         console.log(err)
//     })


const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject('Connection Timeout! :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// const request = fakeRequestPromise('yelp.com/api/coffee/page1');

// fakeRequestPromise("yelp.com/api/coffee/page1")
//     .then(() => {
//         console.log("IT WORKED!")
//         console.log("PROMISE RESOLVED")
//         fakeRequestPromise("yelp.com/api/coffee/page2")
//             .then(() => {
//                 console.log("promise resolved (2)")
//             })
//             .catch(() => {
//                 console.log("promise rejected (2)")
//             })
//     })
//     .catch(() => {
//         console.log("promise rejected")
//         console.log("OH NO! ERROR!")
//     })

//THIS ISN'T REALLY BETTER THOUGH

                        //THE MAGIC

fakeRequestPromise("yelp.com/api/nearme/coffee/page1")
    .then((data) => {
        console.log("it worked! page(1)")
        console.log(data)
        return fakeRequestPromise("yelp.com/api/coffee/page2")
    })
    .then((data) => {
        console.log("it worked! page(2)") //calling it for the returned promise
        console.log(data)
        return fakeRequestPromise("yelp.com/api/nearme/coffee/page3")
    })
    .then((data) => {
        console.log("it worked! page(3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("oh no! request failed") //if any request fails, it will directly come to this line
        console.log(err)
    })

