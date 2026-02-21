//  var btn  = document.querySelector('button')
//  var h4  = document.querySelector(' h4')

//  btn.addEventListener('click', ()=>{
  
   
//   h4.innerHTML = "request sending...."
//   h4.style.color = "yellow"
//   setTimeout(()=>{

//   h4.style.color = "green"
//    h4.innerHTML = "friends"
//   },3000)
// })

var full  =  document.querySelector('.full')
var  arman  =  document.querySelector('.status')
var  growthDiv  =  document.querySelector('#growth')
var close  =  document.querySelector('#close')



var grow = 0
var int = null
var time = null
arman.addEventListener("click", function(){
    full.style.display  = 'block'
         int =   setInterval(() => {
                grow++
                growthDiv.style.width = grow + '%'
                
            }, 50);

         time =    setTimeout(() => {
                  full.style.display  = 'none'
                clearInterval(int)
                grow = 0
            }, 5000);
            
})

close.addEventListener("click",function () {
                      full.style.display  = 'none'
                clearInterval(int)
                clearTimeout(time)
                grow = 0
    
})