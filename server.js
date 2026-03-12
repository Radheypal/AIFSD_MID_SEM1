const API="/api/products";


// ADD PRODUCT

async function addProduct(){

const product={

productName:document.getElementById("productName").value,
productCode:document.getElementById("productCode").value,
category:document.getElementById("category").value,
supplierName:document.getElementById("supplierName").value,
quantityInStock:document.getElementById("quantityInStock").value,
unitPrice:document.getElementById("unitPrice").value

};

await fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(product)
});

alert("Product Added Successfully");

getProducts();

}



// GET ALL PRODUCTS

async function getProducts(){

const res=await fetch(API);

const data=await res.json();

displayProducts(data);

}



// SEARCH PRODUCT

async function searchProduct(){

const name=document.getElementById("searchName").value;

const res=await fetch(API+"/search?name="+name);

const data=await res.json();

displayProducts(data);

}



// FILTER CATEGORY

async function filterCategory(){

const cat=document.getElementById("filterCategory").value;

const res=await fetch(API+"/category?cat="+cat);

const data=await res.json();

displayProducts(data);

}



// DISPLAY PRODUCTS IN TABLE

function displayProducts(products){

const table=document.getElementById("productTable");

table.innerHTML="";

products.forEach(p=>{

table.innerHTML+=`

<tr>

<td>${p.productName}</td>
<td>${p.category}</td>
<td>${p.quantityInStock}</td>
<td>${p.unitPrice}</td>

<td>

<button onclick="updateProduct('${p._id}')">Update</button>

<button onclick="deleteProduct('${p._id}')">Delete</button>

</td>

</tr>

`;

});

}



// DELETE PRODUCT

async function deleteProduct(id){

await fetch(API+"/"+id,{
method:"DELETE"
});

getProducts();

}



// UPDATE PRODUCT

async function updateProduct(id){

const newPrice=prompt("Enter new price");

await fetch(API+"/"+id,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

unitPrice:newPrice

})

});

getProducts();

}