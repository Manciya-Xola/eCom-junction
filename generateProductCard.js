/**
 * Create a product card and return an html of it
 * @param {Json} product 
 * @returns html
 * @example
 * ```
 * const product = {name:"apple",store:"yoco"}
 * generateProductCard(product);
 * //return html product card
 */
function generateProductCard(product) {
  console.log(product);
  const div = document.createElement("div");
  div.textContent = "hello world";
  return div;
}
export {generateProductCard};