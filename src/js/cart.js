import ShoppingCart from "./ShoppingCart.mjs";
import { getCartTotalValue } from "./utils.mjs";

const cart = new ShoppingCart("so-cart", document.querySelector(".cart-list"));
window.cart = cart; // This makes it work with the 'onclick' above
cart.init();

// Set Total
document.getElementById("totalValue").innerHTML = `U$${getCartTotalValue().toFixed(2)}`;

// Clear Cart button
document.getElementById("cartButton").addEventListener("click", () => cart.clearCart());