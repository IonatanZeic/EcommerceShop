let label = document.getElementById("label");
let label2 = document.getElementById("label2");
let ShoppingCart = document.getElementById("shopping-cart");
let navlist = document.querySelectorAll(".nav_active");
let hamburger = document.querySelector(".hamburger");
let nav_menu = document.querySelector("#navbar");
let cartBasket = JSON.parse(localStorage.getItem("dataCart")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = cartBasket.map((x) => x.id2).reduce((x, y) => x + y, 0);
};
calculation();

let generateCartItems = () => {
  if (cartBasket.length !== 0 ) {
    return (ShoppingCart.innerHTML = cartBasket
      .map((x) => {
        let { id, item,id2 } = x;
        if(id2 !== 0){
          let search = productString.find((y) => y.id === id) || [];
          return `
            <div class="cart-item">
              <img width = "100" src =${search.img} alt="" />
              <div class="details">
                <div class="title-price-x">
                <h4 class="title-price"> 
                <p>${search.name}</p>
                <p class="cart-item-price"> $ ${search.price}</p>
                </h4>
                <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                </div>
                 <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">${id2}</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
               
            </div>
                <h3>$ ${id2 * search.price}</h3>
              </div>
            </div>
          `;
        }
        else{
          ShoppingCart.innerHTML = ``;
          label.innerHTML = `
          <h2>Cart is Empty</h2>
          <a href="/html/home.html">
            <button class="HomeBtn">Back to home</button>
          </a>
          `;
        }
       
      })
      .join(" "));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="/html/home.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = cartBasket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    cartBasket.push({
      id: selectedItem.id,
      id2: 1,
    });
  } else {
    search.id2 += 1;
  }
  generateCartItems();
  update(selectedItem.id);

  localStorage.setItem("dataCart", JSON.stringify(cartBasket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = cartBasket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.id2 === 0) return;
  else {
    search.id2 -= 1;
  }

  update(selectedItem.id);
  cartBasket = cartBasket.filter((x) => x.id2 !== 0);
  generateCartItems();
  localStorage.setItem("dataCart", JSON.stringify(cartBasket));
};

let update = (id) => {
  let search = cartBasket.find((x) => x.id === id);

  document.getElementById(id).innerHTML = search.id2;
  calculation();
  totalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  cartBasket = cartBasket.filter((x) => x.id !== selectedItem.id);

  generateCartItems();
  totalAmount();
  calculation();
  localStorage.setItem("dataCart", JSON.stringify(cartBasket));
};

let totalAmount = () => {
  if(cartBasket.length !== 0){
    let unshow = cartBasket.map((x)=>{
      let {item,id2, id} = x;
      if(id2 != 0){
        let amount =cartBasket.map((z)=>{
          let {item,id2, id} = z;
          
          let search = productString.find((y) => y.id === id) || [];
          return id2 * search.price; 
        }).reduce((x,y)=>x+y,0);
        label.innerHTML = 
        `<h2> Total Bill : $ ${amount}</h2>
        <button onclick="checkoutC()" class="checkout" >Checkout</button>
        <button onclick="clearCart()" class="removeAll">ClearCart</button>`
        ;
        
      }});
      }
    
 
};

totalAmount();

let clearCart = (() => {
  cartBasket=[];
  generateCartItems();
  localStorage.setItem("dataCart", JSON.stringify(cartBasket));
  calculation();
  
})

let checkoutC = () => {
  label2.innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';clearCart()" >&check;</span> 
  <p>Your order was processed !</p>
</div>`;
  
  
};


let hamburger_fct = () => {
    hamburger.classList.toggle("active");
    console.log("ciusdvbfhejc");
    nav_menu.classList.toggle("active2");
  };