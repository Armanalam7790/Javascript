
//HOF
// Takes another function as argument and return another function

//forEach

var arr  = [11,33,23,45]
arr.forEach((elem, idx)=>{
    console.log(elem ,idx);
    
})

//map this is modify return array]
var arr  = [11,33,23,45]

 let ans1 = arr.map((elem)=>{
  if (elem>33) {
    return elem
  } else return elem+5
  
})

console.log(ans1);


//filter  array ko filter karta h
let users  = ['aman','rakesh','raja','shubham','arman']
var arr  = [11,33,23,45,36,88,92]

 let ans = users.filter((elem)=>{
 
    return elem.includes("a")
  
})

// console.log(ans);

//muteting and non-muteting

  var arr  = [11,33,23,45,36,88,92]
 arr.push(20)                   //muteting
 console.log(arr);

let arr2 = arr.filter((elem)=>{
    return elem%2===0  // non-muteting
})                      

// console.log(arr2);

//sort

 var arr  = [2,116,3,9,14,7]
arr.sort((a,b)=> a-b)
console.log(arr);

arr.reverse()
console.log(arr);

//  var arr  = [2,116,3,9,14,7]
//   var arr2  = [44,35,97]
//   var arr3  = arr.concat(arr2)
//   console.log(arr3);
  
//find 
 

//  let users  = ['aman','rakesh','raja','shubham','arman']
// //  console.log(users);
//  var ans = users.find(a=> a.startsWith('s'))
//  console.log(ans);
 

//some
//  let users  = ['aman','rakesh','raja','shubham','arman']
// //  console.log(users);
//  var ans = users.some(a=> a.startsWith('s'))
//  console.log(ans);
 

//object

// var user  = {
//     name:"Arman",
//     age:20,
//     city:"patna",

//     skills:['html','css','javascript', 'react'],
//     seyHi: function() {
//         console.log('hello everyone');
        
//     },

//     friend: {
//         name:'saurav',
//         profession:"developer",
//         skills:['html','css','javascript', 'react',"next"],
//     }

// }
// // console.log(user.friend.skills[2]);
// console.log(user.seyHi());

// var maths  = {
//     fullname : "mathmetics",
//     add: function(a,b){
//         return a+b
//     },
//     sub: function(a,b) {
//         return a-b
//     },

//     mul: function(a,b) {
//         return a*b
//     },


// }
// console.log(maths.add(10,20));
// console.log(maths.sub(10,20));
// console.log(maths.mul(10,20));


// var obj = {
//     greet : function(name) {
//         console.log('good moring..',name);
        
//     },
//     sayBye: function(){
//         console.log('bye bye');
        
//     }
// }
// obj.greet('arman')
// obj.sayBye()