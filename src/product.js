let product = document.getElementById("showProduct");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let cartBasket = JSON.parse(localStorage.getItem("dataCart")) || [];
let navlist = document.querySelectorAll(".nav_active");
let hamburger = document.querySelector(".hamburger");
let nav_menu = document.querySelector("#navbar");




let generateProduct = () => {
  let productFound = productString.find((x) => x.id === basket[0].id);

  let { id, img, name, desc1, desc2, price } = productFound;
  let search = cartBasket.find((y) => y.id === id) || [];
  product.innerHTML = `<section class="productPage">
           <div class="productHead">
             <img src="${img}" alt="Image" />
             <div class="headText">
               <h2>${name}</h2>
               <p>
                ${desc1}
               </p>
               <div class="price-quantity">
                 <h2>$${price}</h2>
                 <div class="buttons">
                   <div class="quantityText">
                     <h2>Quantity:</h2>
                     <div class="changeQuantity">
                       <i onclick="decrement(${id})"  class="bi bi-dash-lg"></i>
                       <div id="${id}" class="quantity">
                       ${search.item === undefined ? 0 : search.item}
                       </div>
                       <i  onclick="increment(${id})" class="bi bi-plus-lg"></i>
                     </div>
                   </div>
     
                   <button class="buttonOne" onclick="addToCart(${id})">Add to Cart</button>
                 </div>
               </div>
             </div>
           </div>
           <div class="productContent">
            
              ${desc2}
            
           </div>
         </section> `;
};
generateProduct();



let increment = (id) => {
  let selectedItem = id;
  let search = cartBasket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    cartBasket.push({
      id: selectedItem.id,
      ni: "in paris",
      item: 1,
      id2: 0,
    });
  } else {
    search.item += 1;
  }

  update(selectedItem.id);

  localStorage.setItem("dataCart", JSON.stringify(cartBasket));
};



let decrement = (id) => {
  let selectedItem = id;
  let search = cartBasket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    return;
  } else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);

  localStorage.setItem("dataCart", JSON.stringify(cartBasket));
};

let update = (id) => {
  let search = cartBasket.find((x) => x.id === id);

  document.getElementById(id).innerHTML = search.item;
  calculation();
};
let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = cartBasket.map((x) => x.id2).reduce((x, y) => x + y, 0);
    
  };
  calculation ();

  let addToCart = (id)=>{
    let selectedItem = id;
    let search = cartBasket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) {
      return ;
    } else {
        search.id2 += search.item;
        search.item = 0; 
    }
    update(selectedItem.id);
    localStorage.setItem("dataCart", JSON.stringify(cartBasket));
  };

  let hamburger_fct = () => {
    hamburger.classList.toggle("active");
    console.log("ciusdvbfhejc");
    nav_menu.classList.toggle("active2");
  };