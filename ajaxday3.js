// async function PromiseAll(){
//     let a = await Promise.all([
//         Promise.resolve("hello"),
//         Promise.resolve("helloA"),
//         Promise.resolve("helloB")
//     ])
//     console.log(a)
// }
// PromiseAll()

// async function PromiseAllSettled(){
//     let b = await Promise.allSettled([
//         Promise.resolve('hello'),
//         Promise.reject('helloA'),
//         Promise.resolve("helloB")
//     ])
//     console.log(b)
// }
// PromiseAllSettled()

function student(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('studentOne')
        },3000)
    })
}
function studentTwo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('studentTwo')
        },2000)
    })
}

// async function getRaceFunction(){
//     let r = await Promise.race([
//         student(),
//         studentTwo()
//     ])
//     console.log(r)
// }
// getRaceFunction()

async function getPromiseAny(){
    let a = await Promise.any([
        Promise.reject("bye"),
        Promise.reject("byeA"),
        student(),
        studentTwo()
    ])
    console.log(a)
}
getPromiseAny()