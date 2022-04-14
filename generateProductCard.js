function generateProductCard(product) {
  console.log(product)
  const product_container = document.createElement("div");
  product_container.classList.add('product-container');
  const image_div = document.createElement("div");
  image_div.classList.add('image');
  product_container.appendChild(image_div);
  const image_img = document.createElement("img");
  image_img.src = product.image;
  image_img.alt = "Product image";
  image_div.appendChild(image_img);
  const description_div = document.createElement("div");
  description_div.classList.add("description-product");
  product_container.appendChild(description_div);
  const heading_div = document.createElement("div");
  heading_div.classList.add("title-desc");
  description_div.appendChild(heading_div);
  const title_div = document.createElement("div");
  title_div.classList.add("title");
  heading_div.appendChild(title_div);
  const heading_h3 = document.createElement("h3");
  heading_h3.textContent = product.name;
  title_div.appendChild(heading_h3);
  const by_div = document.createElement("div");
  by_div.classList.add("by");
  heading_div.appendChild(by_div)
  const by_h4 = document.createElement("h4");
  by_h4.textContent = 'by';
  const span_by = document.createElement("span");
  span_by.textContent = product.company;
  by_h4.appendChild(span_by)
  by_div.appendChild(by_h4)
  const short_div = document.createElement("div");
  short_div.classList.add("short-desc");
  heading_div.appendChild(short_div);
  const short_h4 = document.createElement("h4");
  short_h4.textContent = product.description;
  short_div.appendChild(short_h4);
  const price_cart = document.createElement("div");
  price_cart.classList.add("price-cart");
  description_div.appendChild(price_cart);
  const price_div = document.createElement("div");
  price_div.classList.add("price");
  price_cart.appendChild(price_div);
  const previous_h4 = document.createElement("h4");
  previous_h4.classList.add("previous");
  previous_h4.textContent = `R ${product.price}`;
  price_div.appendChild(previous_h4);
  const current_h4 = document.createElement("h4");
  current_h4.classList.add("current");
  current_h4.textContent = `R ${product.discounted_price}`;
  price_div.appendChild(current_h4);
  const add_to_cart_div = document.createElement("div");
  add_to_cart_div.classList.add("add-to-cart");
  price_cart.appendChild(add_to_cart_div);
  const promo_btn_div = document.createElement("div");
  promo_btn_div.classList.add("promo-btn");
  add_to_cart_div.appendChild(promo_btn_div);
  const add_to_cart_btn = document.createElement("button");
  promo_btn_div.appendChild(add_to_cart_btn);
  const btn_span = document.createElement("span");
  btn_span.textContent = "add to cart";
  add_to_cart_btn.appendChild(btn_span);
  return product_container;
}
export {generateProductCard};
