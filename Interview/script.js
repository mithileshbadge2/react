//p1
//removing duplicates elem
// let numbers = [10,20,10,50,60,50,20]
// console.log(new Set(numbers))
// console.log(Array.from(new Set(numbers)))

// let a1 = [...new Set(numbers)]
// console.log(a1)

//p2
// number = [11,22,11,33,44,55,44,55,66,77]
// let a2 = number.filter(function(el,index,arr){
//     return number.indexOf(el) === index
// })
// console.log(a2)

//p3
// let numbers = [11, 22, 11, 33, 44, 55, 44, 55, 66, 77];
// let uniqueNumbers = [];
// numbers.forEach(function(el) {
//     if (!uniqueNumbers.includes(el)) {
//         uniqueNumbers.push(el);
//     }
// });
// console.log(uniqueNumbers);

//p4
// digits = [10,20,30,40,40,20,50]
// let uarr = []
// let seen = {}

// for(let i = 0; i< digits.length; i++){
//     let item = digits[i]
//     if(!seen[item]){
//         uarr.push(item)
//         seen[item] = true
//     }
// }
// console.log(uarr)

//p5
numbers = [11,22,11,33,44,55,44,55,66,77]
unique = []
for(let i = 0 ; i< numbers.length; i++){
    if(unique.indexOf(numbers[i]) < 0){
        unique.push(numbers[i])
    }
}
console.log(unique)

