import ShoppingCart from "./ShoppingCart.mjs";
import { getCartTotalValue } from "./utils.mjs";

const cart = new ShoppingCart("so-cart", document.querySelector(".cart-list"));
window.cart = cart;
cart.init();

document.getElementById("totalValue").innerHTML = `U$${getCartTotalValue().toFixed(2)}`;

document.getElementById("cartButton").addEventListener("click", () => cart.clearCart());