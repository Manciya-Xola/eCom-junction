/**
 * Fetch data from a provided end point or API
 * @param {String} url 
 * @returns {JSON} data
 * @example
 * ```js
 * const url = 'www.yoco.com';
 * doFetch(url);
 * //returns data
 * ```
 */
 async function doFetch(url) {
  try {
    const response = await fetch(url);
    const data = response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
/**
 * 
 * @param {float} current_price 
 * @param {float} discounted_price 
 * @returns discount_percentage
 * @example
 * ```js
 * const current_price = 100;
 * const discounted_price = 25;
 * calculateDiscount(current_price, discounted_price);
 * //return discount_percentage;
 * ```
 */
function calculateDiscount(current_price, discounted_price) {
  const discount = discounted_price-current_price;
  const discount_percentage = Math.round(discount/current_price *100);
  return discount_percentage;
}
/**
 * calculate the VAT of the products
 * @param {float} params 
 * @returns discount_percentage
 * @example
 * ```js
 * const current_price = 100;
 * calculateVat(current_price);
 * // return 15
 * ```
 */
function calculateVat(current_price) {
  return current_price*0.15;
}
export {doFetch, calculateDiscount, calculateVat};