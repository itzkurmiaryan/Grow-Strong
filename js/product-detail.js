const params = new URLSearchParams(window.location.search);
const product = params.get("product");

const title = document.querySelector(".product-info h1");
const price = document.querySelector(".price");
const description = document.querySelector(".description");
const image = document.querySelector(".product-image img");

if(product === "hdpe"){
  title.textContent = "HDPE Pipe";
  price.textContent = "Starting ₹120/m";
  description.textContent = "High strength HDPE pipes suitable for irrigation and water supply systems.";
  image.src = "https://images.unsplash.com/photo-1581091012184-7c4a6cddf4c3";
}

if(product === "drip"){
  title.textContent = "Drip Irrigation System";
  price.textContent = "Starting ₹2500";
}
