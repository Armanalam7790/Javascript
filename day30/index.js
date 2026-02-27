 var allData  = document.querySelector('.all-data')
let inventory = [
  {
    productName: "Milk",
    price: 50,
    quantity: 20,
    category: "Dairy",
    expiry: "2026-03-02"
  },
  {
    productName: "Bread",
    price: 30,
    quantity: 0,
    category: "Bakery",
    expiry: "2026-02-28"
  },
  {
    productName: "Apple",
    price: 120,
    quantity: 15,
    category: "Fruits",
    expiry: "2026-03-10"
  }
]
 
function print() {
  let sum =  ''
 inventory.forEach((elem, idx)=>{
  
   sum+= ` <div class="item">
          <h3>${elem.productName}</h3>
          <h4>Category : <span>${elem.category}</span></h4>
          <h4>Price : <span>₹${elem.price}</span></h4>
          <h4>Quantity : ${elem.quantity}</h4>
          <h4>Expiry Date = <span>${elem.expiry}</span></h4>

                <div>
                  <button  id=${idx}>Remove</button>
                  <button class=${idx} >Edit</button>
                </div>
        </div>`
  
   
 })

 allData.innerHTML = sum

}
print()
var form  = document.querySelector('form')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  



  var newProduct ={
      productName: form.childNodes[1].value,
      price: form.childNodes[3].value,
      quantity: form.childNodes[5].value,
      category: form.childNodes[7].value,
      expiry:form.childNodes[9].value,

  }


  document.querySelectorAll('form input').forEach(function(elem){
    elem.value = ''
  })
 
  inventory.push(newProduct)
  
  console.log(inventory);
  print()
    // form.reset()
})

allData.addEventListener('click', function name(dets) {
  
   if (dets.target.id && dets.target.innerHTML == 'Remove') {
   
    inventory.splice(dets.target.id,1)
    
   }
let editIndex = null
    if (dets.target.className && dets.target.innerHTML == 'Edit') {
  
  let index = Number(dets.target.className) // class me idx hai
  let item = inventory[index]

  form.childNodes[1].value = item.productName
  form.childNodes[3].value = item.price
  form.childNodes[5].value = item.quantity
  form.childNodes[7].value = item.category
  form.childNodes[9].value = item.expiry

  editIndex = index
}
  print()
})

