
 var body  = document.body
 var cr  = document.querySelector('.cursor')



body.addEventListener("mousemove", function(dets) {
   
    cr.style.left = dets.x + 'px'
    cr.style.top =  dets.y + 'px'


    
})





