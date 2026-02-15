var obj  = {
    name: "arman",
    age: 20,
    Handsome: true

}
obj.city = "patna"
obj.age  = 21
delete obj.Handsome
console.log(obj);

var obj  = {
    uname:"arman",
    age:20,
    skills:["html", "css", "javascript",'react'],
    greet: function() {
        console.log('hello dosto', this );
        
        return 88
        
    }
}
 console.log(obj.greet());

 console.log(this);


let obj  = {
    user : "arman",
    age:20,
    greet:function(){
        console.log('value of user is', this.user);
        
    }
}
console.log(obj.greet());


const obj  = {
    name :"arman",
    age:20,
    city:'patna'

}
// Object.seal(obj) no add no remove only update
 Object.freeze(obj)
obj.phone  = 'oppo'
delete obj.age
console.log(obj);

// var str  = 'hello'

// console.log(str.length);

// let str  = 'helloelo'
// console.log(str.charAt(1));



// var str  = 'helloarman'

// console.log(str.length);

// let str  = 'helloelo'
// console.log(str.substring(0,4));

// let str  = 'arman'
// console.log(str.indexOf('r'));

// let str  = 'arman'
// console.log(str.replace('m', 'k'));

// let str  = 'arman'
// console.log(str.slice(0,4));

// let str  = 'earman'
// console.log(str.charCodeAt(0));


// let str  = 'helloelo'
// console.log(str.includes('l'));


// var arr  = [10,20,30,40]
// var arr2 = [...arr]


// console.log(arr);
// console.log(arr2);

// var obj  = {
//     model:"Iphone 18",
//     color:"cosmic orange",
//     price:10000
// }
// var obj2  = {...obj}
// obj2.model = 'one plus'



// console.log(obj2);
// console.log(obj);
