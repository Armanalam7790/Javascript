var marks  =  80

marks>60 ? console.log("pass") : console.log("fail");


// variable hoisting function hoisting
console.log('start');
var a  =  50;

function a1() {
    let  x =  true;
    console.log('js is best ', x);
    
}

function a2() {
    let  y =  false;
    console.log('js is worst ', y);
    
}

a1()
a2()
console.log(a);

console.log('end');


// differece between errors
