import { generateProductsCard } from "./generateProductsCard.js";

/**
 * Display the products in HTML
 * @param {array} products 
 * @example
 * ```js
 * const prod = ['apple', 'banana']
 * display(prod)
 * // display html
 * ```
 */
function displayProducts(products) {
  const listItem = document.getElementById('products');
  listItem.textContent = '';
  products.forEach(product =>{
    listItem.appendChild(generateProductsCard(product))
  })
   
}
export {displayProducts};