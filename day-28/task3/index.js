var boxes = document.querySelectorAll('.box')

boxes.forEach(function(box) {
    
    box.addEventListener('mousemove', function() {
        
        var children = box.childNodes
        
        children.forEach(function(node) {
            if (node.nodeType === 1) { // only elements
                node.classList.add('active')
            }
        })
        
    })

    box.addEventListener('mouseleave', function() {
        
        var children = box.childNodes
        
        children.forEach(function(node) {
            if (node.nodeType === 1) {
                node.classList.remove('active')
            }
        })
        
    })

})