import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFotter } from "./utils.mjs";

const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const listing = new ProductList("tents", dataSource, listElement);

loadHeaderFotter();

listing.init();
