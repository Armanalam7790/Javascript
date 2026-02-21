var btn  = document.querySelector("button")
var body = document.querySelector("body")

console.log(btn);
btn.addEventListener("click", function () {
  console.log("hello world");
   var h1 = document.createElement("h1")
   console.log(h1);
   h1.innerText = "apna collage"
   h1.style.background = "red"
   body.appendChild(h1)
   
  
})
