const getUsers = fetch(`https://reqres.in/api/users?page=2`)
    .then((response) => response.json())

const createUser = fetch(`https://reqres.in/api/users`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John Doe',
        job: 'Software Developer'
    })
})
    .then(function (response) {
        return response.json()
    })

function quickResponse(){
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            reject('I executed first')
        },1)
    })
}

async function anyPromise(){
    try{
        let a1 = await Promise.any([getUsers,
            createUser,
        quickResponse()]
    )
    console.log(a1)
    }
    catch(error){
        console.log("All failed:",error)
    }
}

// Promise.allSettled([getUsers,
//     createUser,
//     quickResponse()]
// ).then(function(arr){
//     console.log(arr)
// })

// Promise.race([
//     getUsers,
//     createUser,
//     quickResponse()
// ]).then(function(response){
//     console.log(response)
// })
// .catch((error) => console.error("All failed:",error))

// Promise.any([getUsers,createUser,quickResponse()])
// .then(function(result){
//     console.log(result)
// })
// .catch((error) => console.error("All failed:",error))

Promise.all([
    getUsers,
    createUser
])
.then(function(arr){
    console.log(arr[0])
    console.log(arr[1])
})
.catch((error) => console.error("All failed:",error))


