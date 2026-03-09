//rest oprator

// let fn  = (a,b,c, ...rest)=>{                        //rest
//     console.log(a,b,c, ...rest);                     //sprade
    
// }
// fn(4,6,7,34,2,4,5,6,8)

//promises

let prom   = new Promise((resolve, reject)=>{
 let party = true
 if (party) {
    return resolve({
        desc: ' taj hotal bhopal wala'
    })
 } 
 return reject('no party  paise nhi hai')

})


prom.then((val)=> console.log(val)).catch((err)=>console.log(err))