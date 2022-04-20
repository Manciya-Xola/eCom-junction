let itemsCount = document.getElementById("number-of-items");
itemsCount.textContent = 0;
/**
 * store the product into the product cart and the product cart is stored in the local storage
 * @param {Object} product 
 * @example
 *
 */
function addToCart(product) {
  // this method is not taking into account that the product is already in the cart
  // meaning if the product is already in the cart and its added again, it will have 2 products of the same item
  if (localStorage.getItem("cart") == null) {
    const cart = [];
    cart[0] = product;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  else{
    const update_cart = JSON.parse(localStorage.getItem("cart"));
    update_cart.push(product);
    localStorage.setItem("cart", JSON.stringify(update_cart));
  }
  itemsCount.textContent = JSON.parse(localStorage.getItem('cart')).length;
}
/**
 * Remove an item from the cart
 * @param {Object} product
 *  
 */
function removeFromCart(product) {
  const update_cart = JSON.parse(localStorage.getItem("cart"));
  var index = update_cart.findIndex(obj => obj.id==product.id);
  update_cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(update_cart));
  location.reload();
  itemsCount.textContent = JSON.parse(localStorage.getItem('cart')).length;
}
/**
 * Calculate the total cost of the cart items including the VAT
 * @returns total
 * @example
 */
function getCartTotal() {
  const update_cart = JSON.parse(localStorage.getItem("cart"));
  let total = 0;
  if (localStorage.length>0) {
    update_cart.forEach(item => {
      total += parseFloat(item.price);
    });
  }
  return total;
}
/**
 * Clear the cart at the users request
 * @returns 
 */
function clearCart() {
  let isExecuted = confirm("Are you sure you wan to clear the cart");
  if (isExecuted) {
    localStorage.clear();
    itemsCount.textContent = 0;
  } 
  location.reload();
  return;
}
export {addToCart, removeFromCart, getCartTotal, clearCart};