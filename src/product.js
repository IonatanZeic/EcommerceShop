let product = document.getElementById("showProduct");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateProduct = ()=> {
        
          let productFound = productString.find((x) =>
             x.id === basket[0].id
            );
           
            let {id,img,name,desc1,price} = productFound;
           product.innerHTML = ` <div id=product-id-${id} class="item">
            <img width="220px" src="${img}" alt="image">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc1}</p>
                <div class="price-quantity">
                    <h2>${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        
                </div>
            </div>
        </div> `;
            
            
        
          
} ;
generateProduct();