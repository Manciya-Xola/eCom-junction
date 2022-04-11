import { API_URL } from "./shared.js";
import { doFetch } from "./utils.js";



async function main(url) {
  const product = await doFetch(API_URL);
  console.log(product);
}
main();
