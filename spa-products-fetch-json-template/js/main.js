

// =========== Product functionality =========== //
/*
global variables: _products
*/
let _products = [];

/*
Fetches json data from the file products.json
*/
fetch('json/products.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    _products = json
    appendProducts(_products);
  });

  function appendProducts(products) {
  console.log(products);
  document.querySelector("#products-container").innerHTML = ""
  for (let product of products){
    document.querySelector("#products-container").innerHTML += /*html*/
    `
    <article>
    <img src="${product.img}">
    <h3>${product.model}</h3>
    Brand: ${product.brand}
    Price: ${product.price}
    </article>
    `
  }

  // to do
}

function addNewProduct() {
  // to do
    let img = document.querySelector("#img").value;     
    let model = document.querySelector("#model").value;     
    let brand = document.querySelector("#brand").value;     
    let price = document.querySelector("#price").value;   
    
    let newProduct = {
        model: model,
        brand: brand,
        price: price,
        img: img,
    };
    _products.push(newProduct);
    document.querySelector("#products-container").innerHTML="";
    appendProducts(_products)


    }


  // to do
  function search(value) {
    // to do
      value = value.toLowerCase();
      let = results = [];
      for(let product of products){
          let name = product.model.toLowerCase();
          let brand = product.brand.toLowerCase();
          if (name.includes(value)){
              results.push(product)
          }
      }
      appendProducts(results)
  }
  
  


function hideOutOfStock() {
  // to do
  document.querySelector("#products-container").innerHTML = ""
  let instockProduct = []
  for (let product of _products)
  if (product.status === "inStock")
    instockProduct.push(product)
     appendProducts(instockProduct)
     console.log(instockProduct);
}



