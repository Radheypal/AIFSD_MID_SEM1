const Product = require("../models/Product");


// ADD PRODUCT
exports.createProduct = async(req,res)=>{
try{

const product = await Product.create(req.body);

res.status(201).json(product);

}catch(error){

res.status(400).json({message:error.message});

}
};


// GET ALL PRODUCTS
exports.getProducts = async(req,res)=>{
try{

const products = await Product.find();

res.json(products);

}catch(error){

res.status(500).json({message:error.message});

}
};


// GET PRODUCT BY ID
exports.getProductById = async(req,res)=>{
try{

const product = await Product.findById(req.params.id);

res.json(product);

}catch(error){

res.status(500).json({message:error.message});

}
};


// UPDATE PRODUCT
exports.updateProduct = async(req,res)=>{
try{

const product = await Product.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);

res.json(product);

}catch(error){

res.status(500).json({message:error.message});

}
};


// DELETE PRODUCT
exports.deleteProduct = async(req,res)=>{
try{

await Product.findByIdAndDelete(req.params.id);

res.json({message:"Product deleted"});

}catch(error){

res.status(500).json({message:error.message});

}
};


// SEARCH PRODUCT BY NAME
exports.searchProduct = async(req,res)=>{
try{

const name=req.query.name;

const products=await Product.find({

productName:{$regex:name,$options:"i"}

});

res.json(products);

}catch(error){

res.status(500).json({message:error.message});

}
};


// FILTER BY CATEGORY
exports.filterCategory = async(req,res)=>{
try{

const category=req.query.cat;

const products=await Product.find({category});

res.json(products);

}catch(error){

res.status(500).json({message:error.message});

}
};