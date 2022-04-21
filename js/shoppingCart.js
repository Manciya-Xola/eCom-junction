let itemsCount = document.getElementById("number-of-items");
itemsCount.textContent = 0;
/**
 * Store the product into the products cart and the product cart is stored in the local storage
 * The is no repetition of items stored since I added a quantity variable for each item
 * @param {Object} product 
 * @example
 *
 */
function addToCart(product) {
  if (localStorage.getItem("cart") == null) {
    const cart = [];
    product.quantity = 1;
    cart[0] = product;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  else{
    const update_cart = JSON.parse(localStorage.getItem("cart"));
    let contains = false;
    let count = 0;
    for (const item of update_cart) {
      if (item.id === product.id) {
        console.log("already in the cart")
        product.quantity = (product.quantity + 1);
        contains = true;
        update_cart[count] = product;
      }
      count++;
    }
    if (!contains) {
      product.quantity = 1;
      update_cart.push(product)
    }
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
      //console.log(item);
      total += (parseFloat(item.discounted_price)*parseInt(item.quantity));
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