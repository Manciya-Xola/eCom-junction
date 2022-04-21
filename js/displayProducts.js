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
  const show_btn = document.getElementById("showmore");
  show_btn.onclick = function () { showMore();};
  products.forEach(product =>{
    listItem.appendChild(generateProductsCard(product))
  })
  showLess();
}
export {displayProducts};

function showMore() {
	var listData = Array.prototype.slice.call(document.querySelectorAll('#products li:not(.shown)')).slice(3, 6);
  for (var i=0; i < listData.length; i++)
  {
  	listData[i].className  = 'shown';
  }
}
function showLess() {
	var listData = Array.prototype.slice.call(document.querySelectorAll('#products li:not(.hidden)')).slice(-7);
  for (var i=0; i < listData.length; i++)
  {
  	listData[i].className  = 'hidden';
  }
}
