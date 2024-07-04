let a = 10 
let b = 5
if(a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}
a > b ? console.log("a is greater"):console.log("b is greater")

// program 2 
// let season = "winter"
// console.log("The city i am currently is" ${season == "winter"?"pune":"nagpur"})

// program 3

// function declaration 

function additionA(x,y){
    return x + y
}
additionA(12,3)

// function expression 

let additionB = function(x,y){
    return x + y
}

// arrow funcion
let additionC = (x,y)=>{
    return x + y
}
let additionD = (x,y) => x + y


let numbers = [11,22,33,44,55,66,77]
console.log(numbers.map(el=>el+10))


// this keyword 

var firstName = "mithilesh"
var lastName = "badge"

let info = {
    firstName:"vedant",
    lastName:"gaikwad",
    displayName:function(){
        console.log(this.firstName + this.lastName)
        let displayName2 = function(){
            console.log(this.firstName + this.lastName)
        }
        displayName2()
    }
}

info.displayName()


let infoA = {
    firstName:"chinmay",
    lastName:"deshpande",
    displayName:function(){
        console.log(this.firstName + this.lastName)
        let displayName2 = ()=>{
            console.log(this.firstName + this.lastName)
        }
        displayName2()
    }
}

infoA.displayName()

// this ---> window
let info3 = {
    firstName:"Nirnay",
    lastName:"sangolkar",
    displayName:()=>{
        console.log(this.firstName + this.lastName)
        let displayName2 = ()=>{
            console.log(this.firstName + this.lastName)
        }
        displayName2()
    }
}

info3.displayName()