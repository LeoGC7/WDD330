import { getLocalStorage, renderListWithTemplate, setLocalStorage } from "./utils.mjs";

export default class ShoppingCart {
    constructor(key, listElement) {
        this.key = key;
        this.listElement = listElement;
    }

    async init() {
        const list = getLocalStorage(this.key)

        this.renderList(list)
    }

    renderList(list) {
    const groupedList = list.reduce((acc, item) => {
      const existing = acc.find(i => i.Id === item.Id);
      if (existing) {
        existing.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);

    renderListWithTemplate(cartItemTemplate, this.listElement, groupedList, "afterbegin", true);
  }

    addOne(id) {
    let cart = getLocalStorage(this.key);
    const item = cart.find(i => i.Id === id);
    cart.push(item);
    setLocalStorage(this.key, cart);
    location.reload();
  }

    removeOne(id) {
      let cart = getLocalStorage(this.key);
      const index = cart.findIndex(i => i.Id === id);
      if (index > -1) cart.splice(index, 1);
      setLocalStorage(this.key, cart);
      location.reload();
    }

    clearCart() {
        localStorage.removeItem(this.key);
        location.reload();
    }
}

function cartItemTemplate(item) {
  return `
  <li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Images.PrimarySmall}"
        alt="${item.Name}"
      />
    </a>
    <div class="cart-name-color">
      <a href="#"><h2 class="card__name">${item.Name}</h2></a>
      <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    </div>
    <div class="cart-quantity-price">
      <p class="cart-card__quantity">qty: ${item.quantity}</p>
      <p class="cart-card__price">$${(item.FinalPrice * item.quantity).toFixed(2)}</p>
    </div>
    <div class="cart-item-buttons">
      <button onclick="window.cart.addOne('${item.Id}')">+</button>
      <button onclick="window.cart.removeOne('${item.Id}')">-</button>
    </div>
  </li>`;
}