//document object model

var num  =  document.querySelector('#number')
var money  =  document.querySelector('#money')
var btn  =  document.querySelector('button')
var h1  =  document.querySelector('h1')

btn.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random()*10)
  
  if (num.value == "" && money.value == "") {
    h1.innerText = "Enter Number And Money"
  }else{
    if (num.value == randomNumber) {
    console.log("winner");
    
    h1.innerText = "winner"
    h1.style.color = "yellow"
    
    
  }else{
     h1.innerText = "Try again"
    h1.style.color = "red"
console.log(randomNumber);
  }
  }

  
    
})

console.log(num);
console.log(money);

