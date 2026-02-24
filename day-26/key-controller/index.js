
var body = document.body
var img = document.querySelector('img')

var movex =0
var movey =0

body.addEventListener("keydown", function (dets) {
   if (dets.code === 'ArrowRight') {
    movex++
    
}

if (dets.code === 'ArrowLeft') {
    if (movex>0) {
        movex--
    }
    
}

if (dets.code === 'ArrowUp') {
    if (movey>0) {
        movey--
    }
    
}
if (dets.code === 'ArrowDown') {
    movey++
    
}



img.style.left = movex + '%'
img.style.top = movey+ '%'
})
