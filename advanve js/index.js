//clousers

// let cls = ()=>{
//   let a  =  10
//   return ()=>{

//     return ()=>{
//        return ()=>{
//            console.log('==> ', a);
//            return 0
//        }

//     }

//   }
// }

// console.log(cls()()()());

//pure & unpure

//  let fn  = ()=>{
//     let a  = 90
//     a= 100
//     console.log(a);

//  }

// fn()

//    let a  = 90
// let fn  = ()=>{

//     a= 100
//     console.log(a);

//  }

// fn()

//Destructing on object

let obj = {
//   name: "RAHUL",
  adderess: " patna",
  email: "rahul@gmail.com",
  copmony: "sheryies pvt ltd",
  designation: "developer",
  projects: {
    name: "e-commerce",
  },
};
let {
  adderess,
  email,
  copmony,
  designation,
  projects,
} = obj;
console.log(email, projects);
