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
  
}
function removeFromCart(product) {
}
function getCartTotal() {
}
function clearCart() {
}
export {addToCart, removeFromCart, getCartTotal, clearCart};