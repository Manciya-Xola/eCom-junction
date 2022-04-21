import { generateProductCard } from "./generateProductCard.js";

/**
 * Display the products in HTML
 * @param {Object} currentProduct
 * @example
 * ```js
 * const prod = {name:"Xola", surname:"Manciya"}
 * display(prod)
 * // display html
 * ```
 */
function displayProduct(currentProduct) {
  const listItem = document.getElementById('product-card');
  listItem.textContent = '';
  listItem.appendChild(generateProductCard(currentProduct))
}
export {displayProduct};