var allcards = document.querySelectorAll('.card')

// console.log(allcards);
allcards.forEach((elem) => {
    
    elem.childNodes[5].addEventListener("click", function () {

        if (elem.childNodes[3].innerHTML === 'strenger') {
            elem.childNodes[3].innerHTML = 'friends'
            elem.childNodes[3].style.color = 'green'
            elem.childNodes[5].innerHTML = 'remove'

        } else {
            elem.childNodes[3].innerHTML = 'strenger'
            elem.childNodes[3].style.color = 'red'
            elem.childNodes[5].innerHTML = 'add friend'
        }


    })

})
