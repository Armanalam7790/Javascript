let products = [
  {
    "productname": "Gaming Laptop RGB",
    "category": "Electronics",
    "price": 1299.99,
    "imageurl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
  },
  {
    "productname": "Noise Buds VS102 Elite",
    "category": "Electronics",
    "price": 29.99,
    "imageurl": "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500"
  },
  {
    "productname": "SEHUB Ultra S9 Smartwatch",
    "category": "Wearables",
    "price": 89.99,
    "imageurl": "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500"
  },
  {
    "productname": "Wireless Over-Ear Headphones",
    "category": "Electronics",
    "price": 79.99,
    "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtP_JUxOMiIXpMhSCGHK_KW_YZhfHAUG8dnA&s"
  },
  {
    "productname": "JETE Wireless Earbuds",
    "category": "Electronics",
    "price": 19.99,
    "imageurl": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
  },
  {
    "productname": "Sellmell Tan Leather Sneakers",
    "category": "Footwear",
    "price": 59.99,
    "imageurl": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500"
  },
  {
    "productname": "YouVani Folded T-Shirt Black",
    "category": "Apparel",
    "price": 24.99,
    "imageurl": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
  },
  {
    "productname": "Uniqlo Slim Fit Jeans",
    "category": "Apparel",
    "price": 49.99,
    "imageurl": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
  },
  {
    "productname": "Minimalist White Backpack",
    "category": "Accessories",
    "price": 39.99,
    "imageurl": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
  },
  {
    "productname": "Magic Color-Changing Mug",
    "category": "Home",
    "price": 15.99,
    "imageurl": "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500"
  },
  {
    "productname": "Puma Speedcat White Sneakers",
    "category": "Footwear",
    "price": 89.99,
    "imageurl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500"
  },
  {
    "productname": "Just Shoot Camera T-Shirt",
    "category": "Apparel",
    "price": 22.99,
    "imageurl": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500"
  },
  {
    "productname": "Bapal Green Polyester Backpack",
    "category": "Accessories",
    "price": 34.99,
    "imageurl": "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500"
  },
  {
    "productname": "Heart Print Ceramic Mug Set",
    "category": "Home",
    "price": 28.99,
    "imageurl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500"
  },
  {
    "productname": "Wireless Bluetooth Speaker",
    "category": "Electronics",
    "price": 45.99,
    "imageurl": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
  },
  {
    "productname": "Running Shoes Blue",
    "category": "Footwear",
    "price": 69.99,
    "imageurl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    "productname": "Cotton Hoodie Gray",
    "category": "Apparel",
    "price": 44.99,
    "imageurl": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"
  },
  {
    "productname": "Leather Wallet Brown",
    "category": "Accessories",
    "price": 29.99,
    "imageurl": "https://imagescdn.louisphilippe.com/img/app/product/4/40019263-20848291.jpg?auto=format&w=390"
  },
  {
    "productname": "Stainless Steel Water Bottle",
    "category": "Home",
    "price": 19.99,
    "imageurl": "https://deq64r0ss2hgl.cloudfront.net/images/product/magnum-stainless-steel-water-bottle-750ml-93262584004992.jpg"
  },
  {
    "productname": "Fitness Tracker Band",
    "category": "Wearables",
    "price": 39.99,
    "imageurl": "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500"
  }
]

// let cartsData = []
let allProducts  =''
products.forEach((elem,idx)=>{
    allProducts += `  
     <div class="product-cart">
                <div class="img">
                    <img src="${elem.imageurl}" alt="">
                </div>

                <div class="content">
                    <h3>Name : <span> ${elem.productname}</span> </h3>
                    <h3>Category : ${elem.category}</h3>
                    <h3>Price :  <span>$${elem.price}</span></h3>
                </div>


                <div class="btns">

                    
                    <button id='${idx}' >Add to Cart</button>

                </div>

          </div>`
})
 let section = document.querySelector('section')
section.innerHTML = allProducts


 let homebtn  = document.querySelector('#home')
 let cartbtn  = document.querySelector('#cart')
 let cartscreen  = document.querySelector('.card-screen')
//  let cartsData = []
let cartsData = JSON.parse(localStorage.getItem("cart")) || []

 function randercartsui() {
      let cartsui = ''
 cartsData.forEach((elem,idx)=>{
  cartsui+= ` <div class="product-cart">
                <div class="img">
                    <img src="${elem.imageurl}" alt="">
                </div>

                <div class="content">
                    <h3>Name : <span> ${elem.productname}</span> </h3>
                    <h3>Category : ${elem.category}</h3>
                    <h3>Price :  <span>$${elem.price}</span></h3>
                </div>

                  <div class="btns">

                    <button onclick='deletecart(${idx})'>Remove</button>
                   

                </div>



          </div>`
 })
 
 cartscreen.innerHTML = cartsui

 }

 section.addEventListener("click", (dets)=>{
  
    if (!dets.target.id) {
        return
    }

    
  let  clickedCard =    products.find((elem, index)=>{
        return index == dets.target.id
     })
    //  console.log(clickedCard);
     
     cartsData.push(clickedCard)
     localStorage.setItem("cart", JSON.stringify(cartsData))
     randercartsui()
    //  alert('item added to cart')

 
 
 })
 cartbtn.addEventListener('click', function() {
  cartscreen.style.display = 'flex'
 })
  homebtn.addEventListener('click', function() {
  cartscreen.style.display = 'none'
   
 })




//  delete function
function deletecart(id) {
     
  let res =  cartsData.filter((elem,index)=>{
  return index !== id
  })
 
  cartsData = res
  localStorage.setItem("cart", JSON.stringify(cartsData))
  randercartsui()
  console.log(res);


  
      
}
randercartsui()