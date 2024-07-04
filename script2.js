// let fruits = ['apple','mango','banana']
// console.log(fruits)

// let [f1,f2,f3] = fruits
// console.log(f1)

let info1 = {
    firstName:"mithilesh",
    lastName:"badge",
    age:24
}
let a = info1.firstName
let b = info1.lastName
let c = info1.age
console.log(a)
console.log(b)
console.log(c)

let {firstName,lastName,age} = info1
console.log(firstName)

// spread and rest operator
// spread with array 
let fruits = ['apple','mango','banana','chikko']
let newArr = [...fruits,"tomato"]
console.log(newArr)
console.log(fruits)


// rest operator with array
let cities = ['mumbai','kanpur','goa','nagpur']
let [a1,...arr] = cities
console.log(a1)
console.log(arr)


let numbers = [10,20,30,40,50]
function addFour(a,b,c,d){
    console.log(a+b+c+d)
}
addFour(...numbers)

function addAll(...arr){
    console.log(arr)
    return arr.reduce(function(acc,el){
        return acc + el
    },0)
}
let a2 = addAll(12,23,34,45,56,67,78,89)
console.log(a2)









