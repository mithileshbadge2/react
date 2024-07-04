// function additionA(){
//     console.log("A is executed")
// }

// function additionB(){
//     console.log("B is executed")
// }
// additionB()
// additionA()

// function additionC(){
//     setTimeout(function(){
//         console.log("C is executed")
//     },3000)
// }

// function additionD(){
//     console.log("D is executed")
// }

// additionC()
// additionD()

// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)

//     setTimeout(function(){
//         console.log("user ID")
//     },2000)

//     setTimeout(function(){
//         console.log("get ID")
//     },1000)
// }
// getInfo()

// function getInfo(){
//     setTimeout(function(){
//         console.log('user created')
//         setTimeout(function(){
//             console.log('user ID')
//             setTimeout(function(){
//                 console.log('get ID')
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo()

let pro = new Promise(function(resolve,reject){
    let a = 10
    if(a == 10){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})
// pro.
// then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("I will always execute")
// })

pro
.then(function(str){
    console.log(str)
    return "hello"
})
.then(function(str1){
    console.log("hello1")
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always execute")
})


