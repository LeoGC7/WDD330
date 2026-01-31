import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFotter } from "./utils.mjs";

loadHeaderFotter();

const listElement = document.querySelector(".product-list");
const dataSource = new ProductData("tents");
const listing = new ProductList("tents", dataSource, listElement);

listing.init();
