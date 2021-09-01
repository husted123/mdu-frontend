// =========== Product functionality =========== //

/**
 * Array of product objects
 */
let products = [ {
  model: "White T-Shirt",
  brand: "H&M",
  price: "15$",
  img : "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F22%2F8a%2F228a6bcb3c2ec2d28d75799ef0163949e889cdb3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
}, 
{model: "Black T-Shirt",
brand: "H&M",
price: "15$",
img : "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa2%2Ff6%2Fa2f61e7b7ffe151abc0eee4e1e793bf530a7de4f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
},
{
  model: "Blue Crewneck",
  brand: "UNIQLO",
  price: "25$",
  img : "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/173215/sub/goods_173215_sub3.jpg?width=734"

},


  // to do
];

/**
 * Appending products to the DOM using a for-of loop
 */
function appendProducts(products) { 
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

appendProducts(products)
/**
 * Adding a new product to the Array of products
 */


    //Add new family member
    function addNewProduct(){

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
      products.push(newProduct);
      document.querySelector("#products-container").innerHTML="";
      appendProducts(products)
  
  
      }




/**
 * Searching for products matching the input value
 */
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

