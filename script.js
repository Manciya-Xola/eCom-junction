console.log("hello world");

async function getProducts() {
  const products = await fetch("https://yoco-students-api-server.herokuapp.com/v1/junction/");
  const json_Products = await products.json()
  console.log(json_Products);
}
getProducts();