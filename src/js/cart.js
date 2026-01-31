import ShoppingCart from "./ShoppingCart.mjs";
import { getCartTotalValue } from "./utils.mjs";

// function cartItemTemplate(item) {
//   const newItem = `<li class="cart-card divider">
//   <a href="#" class="cart-card__image">
//     <img
//       src="${item.Image}"
//       alt="${item.Name}"
//     />
//   </a>
//   <a href="#">
//     <h2 class="card__name">${item.Name}</h2>
//   </a>
//   <p class="cart-card__color">${item.Colors[0].ColorName}</p>
//   <p class="cart-card__quantity">qty: 1</p>
//   <p class="cart-card__price">$${item.FinalPrice}</p>
// </li>`;

//   return newItem;
// }

const cart = new ShoppingCart("so-cart", document.querySelector(".cart-list"));

cart.init();

const cartButton = document.getElementById("cartButton");
cartButton.addEventListener("click", () => {
  cart.clearCart();
});

const totalElement = document.getElementById("totalValue");
const totalValue = getCartTotalValue();

totalElement.innerHTML = `U$${totalValue}`
