let navlist = document.querySelectorAll(".nav_active");
let hamburger = document.querySelector(".hamburger");
let nav_menu = document.querySelector("#navbar");
let shop = document.getElementById("featured_items");
let cartBasket = JSON.parse(localStorage.getItem("dataCart")) || [];

let basket = JSON.parse(localStorage.getItem("data")) || [];
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = cartBasket.map((x) => x.id2).reduce((x, y) => x + y, 0);
};
calculation();
let generateShop = () => {
  return (shop.innerHTML = productString
    .slice(4, 12)
    .map((x) => {
      let { id, name, price, img } = x;

      return ` <div id=product-id-${id} class="item"  onclick="openProduct(${id})">
	  <img width="220px" src="${img}" alt="image">
	  <div class="details">
		  <h3>${name}</h3>
		  
		  <div class="price-quantity">
			  <h2  id="${id}">$ ${price}</h2>
			  
		  </div>
	  </div>
  </div> `;
    })
    .join(" "));
};

generateShop();

let active_fct = () => {
  for (let i = 0; i < navlist.length; i++) {
    navlist[i].addEventListener("click", function () {
      for (let x = 0; x < navlist.length; x++) {
        if (navlist[x] == this) {
          navlist[x].classList.add("active");
          console.log("jisdahvgdcvbj");
        } else {
          navlist[x].classList.remove("active");
        }
      }
    });
  }
};
active_fct();

let hamburger_fct = () => {
  hamburger.classList.toggle("active");
  console.log("ciusdvbfhejc");
  nav_menu.classList.toggle("active2");
};

let openProduct = (get) => {
  let selected = get;
  basket = [];

  console.log(selected.id);
  basket.push({
    id: selected.id,
  });
  window.open("/html/product.html", "_self");
  localStorage.setItem("data", JSON.stringify(basket));
};
