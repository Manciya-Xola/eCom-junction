import { clearCart, getCartTotal, removeFromCart } from "./shoppingCart.js";
import { calculateVat } from "./utils.js";
const update_cart = JSON.parse(localStorage.getItem("cart"));

function cartIsEmptyCartGenerator() {
  const cart_container = document.getElementById("cart-container");
  cart_container.textContent = '';
  const cart_summary = document.createElement("div");
  cart_summary.classList.add("cart-summary-empty");
  cart_container.appendChild(cart_summary);
  const summary_header = document.createElement("div");
  summary_header.classList.add("summary-header");
  cart_summary.appendChild(summary_header);
  const cart_heading_h1 = document.createElement("h1");
  cart_heading_h1.textContent = `Your cart is empty`;
  summary_header.appendChild(cart_heading_h1);
  const pay_article = document.getElementById("pay-btn");
  pay_article.textContent = "";
}


function generateCart(number_of_items) {
  const itemsCount = document.getElementById("number-of-items");
  itemsCount.textContent = number_of_items;
  
  const cart_container = document.getElementById("cart-container");
  cart_container.textContent = '';
  const cart_summary = document.createElement("div");
  cart_summary.classList.add("cart-summary");
  cart_container.appendChild(cart_summary);
  const summary_header = document.createElement("div");
  summary_header.classList.add("summary-header");
  cart_summary.appendChild(summary_header);
  const cart_heading_h1 = document.createElement("h1");
  cart_heading_h1.textContent = `Your cart has ${number_of_items} items`;
  summary_header.appendChild(cart_heading_h1);
  const clear_button = document.createElement("button");
  clear_button.textContent = "Clear cart";
  clear_button.onclick = function () {clearCart();};
  summary_header.appendChild(clear_button); 
  //list items
  const list_ul = document.createElement("ul");
  list_ul.classList.add("summary-list");
  cart_summary.appendChild(list_ul);
  update_cart.forEach(item => {
    const list_li = document.createElement("li");
    list_ul.appendChild(list_li);
    const item_img = document.createElement("img");
    item_img.src = item.image;
    item_img.alt = "Product";
    list_li.appendChild(item_img);
    const prod_item_div = document.createElement("div");
    prod_item_div.classList.add("prod-item-desc");
    list_li.appendChild(prod_item_div);
    const item_header_div = document.createElement("div");
    item_header_div.classList.add("item-heading");
    prod_item_div.appendChild(item_header_div);
    const item_header_h1 = document.createElement("h1");
    item_header_h1.textContent = item.name;
    const item_price_h1 = document.createElement("h1");
    item_price_h1.textContent = item.price;
    item_header_div.appendChild(item_header_h1);
    item_header_div.appendChild(item_price_h1);
    const remove_div = document.createElement("div");
    remove_div.classList.add("remove-item");
    prod_item_div.appendChild(remove_div);
    const remove_btn = document.createElement("button");
    remove_btn.textContent = "Remove";
    remove_btn.onclick = function () {removeFromCart(item);};
    remove_div.appendChild(remove_btn);
    const hor_hr = document.createElement("hr");
    list_ul.appendChild(hor_hr);
  });



  // total summary
  const total_container_div = document.createElement("div");
  total_container_div.classList.add("total-container");
  cart_summary.appendChild(total_container_div);
  const subtotal = document.createElement("div");
  subtotal.classList.add("subtotal");
  total_container_div.appendChild(subtotal);
  //sub total
  const sub_div = document.createElement("div");
  sub_div.classList.add("label-amount");
  sub_div.classList.add("sub");
  subtotal.appendChild(sub_div);
  const sub_label = document.createElement("label");
  sub_label.textContent = "Sub-total: ";
  const sub_p = document.createElement("p");
  sub_p.textContent = " R "+(Math.round((getCartTotal()-calculateVat(getCartTotal()))*100)/100);
  sub_div.appendChild(sub_label);
  sub_div.appendChild(sub_p);
  // total vat
  const vat_div = document.createElement("div");
  vat_div.classList.add("label-amount");
  vat_div.classList.add("vat");
  subtotal.appendChild(vat_div);
  const vat_label = document.createElement("label");
  vat_label.textContent = "VAT: ";
  const vat_p = document.createElement("p");
  vat_p.textContent = "R "+(Math.round(calculateVat(getCartTotal())*100)/100);
  vat_div.appendChild(vat_label);
  vat_div.appendChild(vat_p);

  // total
  const total_div = document.createElement("div");
  total_div.classList.add("label-amount");
  total_div.classList.add("total");
  subtotal.appendChild(total_div);
  const total_label = document.createElement("label");
  total_label.textContent = "Total: ";
  const total_p = document.createElement("p");
  total_p.textContent = "R "+(Math.round(getCartTotal()*100)/100);
  total_div.appendChild(total_label);
  total_div.appendChild(total_p);
  
}

if (update_cart==null || update_cart.length==0) {
  cartIsEmptyCartGenerator()
} else {
  generateCart(update_cart.length)
}

