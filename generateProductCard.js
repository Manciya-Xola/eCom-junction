import { calculateDiscount } from "./utils.js";

/**
 * Create a product card and return an html of it
 * @param {JSON} product 
 * @returns html
 * @example
 * ```js
 * const product = {name:"apple",store:"yoco"};
 * generateProductCard(product);
 * //return html product card
 * ```
 */
function generateProductCard(product) {
  console.log(product);
  const item = document.createElement("li");
  item.id = product.id;
  const product_div = document.createElement("div");
  product_div.classList.add("product");
  item.appendChild(product_div)
  const img_div = document.createElement("div");
  img_div.classList.add("product-image");
  product_div.appendChild(img_div)
  const img_img = document.createElement("img");
  img_img.src = product.image;
  img_img.alt = "Product image";
  img_div.appendChild(img_img)

  const discount = calculateDiscount(product.discounted_price,product.price);
  if ((discount)!=0) {
    const sale = document.createElement("div");
    sale.classList.add("sale-percent")
    img_div.appendChild(sale);
    const percent = document.createElement("span");
    percent.textContent = discount;
    sale.appendChild(percent);
    sale.appendChild(document.createTextNode('% OFF'));
  }
  
  //product details
  const details_div = document.createElement("div");
  details_div.classList.add("product-details");
  product_div.appendChild(details_div)
  //description
  const description_div = document.createElement("div");
  details_div.classList.add("description");
  details_div.appendChild(description_div);
  //title and description
  const title_div = document.createElement("h1");
  title_div.classList.add("title");
  title_div.id = "title";
  title_div.textContent = product.name;
  description_div.appendChild(title_div);
  const desc_div = document.createElement("h2");
  desc_div.classList.add("short-description");
  desc_div.id = "short-description";
  desc_div.textContent = product.description;
  description_div.appendChild(desc_div);

  //Cart and Price
  const price_cart_div = document.createElement("div");
  price_cart_div.classList.add("price-cart");
  product_div.appendChild(price_cart_div);

  //price
  const price_div = document.createElement("div");
  price_div.classList.add("price");
  price_cart_div.appendChild(price_div);

  if ((discount)!=0) {
    const previous_div = document.createElement("h4");
    previous_div.classList.add("previous");
    previous_div.id = "previous";
    previous_div.textContent = "R "+product.price;
    price_div.appendChild(previous_div);
  }
  
  const current_div = document.createElement("h4");
  current_div.classList.add("current");
  current_div.id = "current";
  current_div.textContent = "R "+product.discounted_price;
  price_div.appendChild(current_div);

  //add to cart button
  const add_div = document.createElement("div");
  add_div.classList.add("add-to-cart");
  price_cart_div.appendChild(add_div);
  const add_button = document.createElement("button");
  add_button.id = "add-item";
  add_button.addEventListener('click',() =>{
    onAddToCart(product)
  });
  add_div.appendChild(add_button);
  const add_img = document.createElement("img");
  add_img.src = "./img/Vector.jpg";
  add_img.alt = "add to cart";
  add_button.appendChild(add_img)
  return item;
}
function onAddToCart(product) {
  console.log(product.id);
}
export {generateProductCard};