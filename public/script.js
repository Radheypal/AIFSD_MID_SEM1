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

alert("Product Added");

getProducts();

}



// LOAD PRODUCTS
async function getProducts(){

const res=await fetch(API);

const data=await res.json();

const table=document.getElementById("productTable");

table.innerHTML="";

data.forEach(p=>{

table.innerHTML+=`
<tr>

<td>${p.productName}</td>

<td>${p.category}</td>

<td>${p.quantityInStock}</td>

<td>${p.unitPrice}</td>

<td>

<button onclick="editProduct('${p._id}','${p.productName}','${p.category}','${p.quantityInStock}','${p.unitPrice}')">
Update
</button>

<button class="delete" onclick="deleteProduct('${p._id}')">
Delete
</button>

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
function editProduct(id,name,category,qty,price){

document.getElementById("productName").value=name;
document.getElementById("category").value=category;
document.getElementById("quantityInStock").value=qty;
document.getElementById("unitPrice").value=price;

const button=document.querySelector(".form button");

button.innerText="Update Product";

button.onclick=async function(){

const product={

productName:document.getElementById("productName").value,
category:document.getElementById("category").value,
quantityInStock:document.getElementById("quantityInStock").value,
unitPrice:document.getElementById("unitPrice").value

};

await fetch(API+"/"+id,{

method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(product)

});

alert("Product Updated");

button.innerText="Add Product";

button.onclick=addProduct;

getProducts();

}

}