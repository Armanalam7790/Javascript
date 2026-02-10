//function

function abc(a,x) {
    console.log("hello", a, "your age is ", x);
    
}
abc("arman","60")

function a1(a) {
 console.log("hello 1",a);
    return 10
}
// function statement

let a2 = function(b) {
    console.log("hello 2",b);
    return 20
}
//first class function & function expression

var a3 =  (c)=> {
    console.log("hello 3",c);
    return 30
    
}
var a4 =  (d)=> console.log("hello 3",d);

console.log(a1("Arman"));

console.log(a2("Subham"));

console.log(a3("Rakesh"));

console.log(a4("Rachit"));

// function expression me hoisting nhi hoti hai
sing()

function sing() {
    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    
}
// sing()

//hoisting

//array
// var  a  = [10,20,30,40]
// console.log(a);

// a.push(99,100,160)
// console.log(a);

// // a.pop()
// // console.log(a);
// a.unshift(1,2,3,4,5)
// console.log(a);

// a.shift()

// console.log(a);

// var arr  = [10,20,30,40,50]
//  let n = arr.splice(1,3)
// console.log(arr);
// console.log(n);
