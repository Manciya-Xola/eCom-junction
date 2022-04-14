import { params } from "./project.js";
import { doFetch } from "./utils.js";
import { API_URL } from "./shared.js";
import { displayProduct } from "./displayProduct.js";

async function product() {
  const Product_URL = API_URL+`product/${params.get("id")}`;
  const currentProduct = await doFetch(Product_URL);
  displayProduct(currentProduct);
}
product()