import { displayProducts} from "./displayProducts.js";
import { API_URL } from "./shared.js";
import { doFetch } from "./utils.js";
const update_cart = JSON.parse(localStorage.getItem("cart"));
const itemsCount = document.getElementById("number-of-items");
itemsCount.textContent = update_cart==null? 0:update_cart.length;

async function main(url) {
  const product = await doFetch(API_URL);
  displayProducts(product);
}
main();