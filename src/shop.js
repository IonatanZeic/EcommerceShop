let shop = document.getElementById("titleShop");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let cartBasket = JSON.parse(localStorage.getItem("dataCart")) || [];
let navlist = document.querySelectorAll(".nav_active");
let hamburger = document.querySelector(".hamburger");
let nav_menu = document.querySelector("#navbar");
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = cartBasket.map((x) => x.id2).reduce((x, y) => x + y, 0);
};
calculation();



let generateShop = () => {
	return (shop.innerHTML = productString.map((x) => {
		let { id, name, price, desc1, img } = x;
		
		
		return ` <div class="item"  onclick="openProduct(${id})">
		<img width="220px" src="${img}" alt="image">
		<div class="details">
			<h3>${name}</h3>
			
			<div class="price-quantity">
				<h2  id="${id}">${price}</h2>
			
			</div>
		</div>
	</div> `;
	  })
	  .join(" "));
  };
  
generateShop();

let openProduct = (get) => {
	let selected = get;
basket = [];
	
	console.log(selected.id);
	basket.push({
		id:selected.id,
	});
	window.open("/html/product.html","_self");
	localStorage.setItem("data", JSON.stringify(basket));

};

let hamburger_fct = () => {
	hamburger.classList.toggle("active");
	console.log("ciusdvbfhejc");
	nav_menu.classList.toggle("active2");
  };