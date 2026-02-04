import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFotter, getParam } from "./utils.mjs";

loadHeaderFotter();

const category = getParam("category");
const dataSource = new ProductData();
const listElement = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, listElement);

listing.init();