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
export {doFetch};