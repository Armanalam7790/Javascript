

//  var body  = document.body

// var audio = new Audio()

// audio.src = './faaa.mp3'

//  body.addEventListener('keydown', function (dets) {
  
//     if (dets.code === 'Enter') {
     
//         audio.play()
//     }
    
//  })


// var audio = new Audio()
// //  var alldiv = document.querySelectorAll('.Div')
// // console.log(alldiv);
// // alldiv.forEach((elem)=>{
// // console.log(e);

// // })
//  var a = document.querySelector('.A')
//  var b = document.querySelector('.B')
//  var c = document.querySelector('.C')
//  var d = document.querySelector('.D')
//  var e = document.querySelector('.E')
//  var f = document.querySelector('.F')
//  var g = document.querySelector('.G')
//  var h = document.querySelector('.H')
//  var i = document.querySelector('.I')
//  var j = document.querySelector('.J')
// //  var k = document.querySelector('.K')
// //  var l = document.querySelector('.L')



// //  console.log(a);
//  a.addEventListener('click', function() {
//     audio.src = './A.mp3'
//     audio.play()
//  })
 

//   b.addEventListener('click', function() {
//     audio.src = './b.mp3'
//     audio.play()
//  })

//  c.addEventListener('click', function() {
//     audio.src = './c.mp3'
//     audio.play()
//  })

//  d.addEventListener('click', function() {
//     audio.src = './d.mp3'
//     audio.play()
//  })

//  e.addEventListener('click', function() {
//     audio.src = './e.mp3'
//     audio.play()
//  })

//  f.addEventListener('click', function() {
//     audio.src = './f.mp3'
//     audio.play()
//  })
//  g.addEventListener('click', function() {
//     audio.src = './g.mp3'
//     audio.play()
//  })
//  h.addEventListener('click', function() {
//     audio.src = './h.mp3'
//     audio.play()
//  })

//  i.addEventListener('click', function() {
//     audio.src = './i.mp3'
//     audio.play()
//  })

//   j.addEventListener('click', function() {
//     audio.src = './J.mp3'
//     audio.play()
//  })


const audio = new Audio()

const allDiv = document.querySelectorAll('.div')

allDiv.forEach((elem) => {
    elem.addEventListener('click', () => {
        const key = elem.querySelector('h1').innerText.trim().toUpperCase()
        
        audio.src = `./audio/${key}.mp3`
        audio.play()
    })
})